/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useEffect, useMemo, useRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CopyIcon from '@material-ui/icons/FileCopy';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { AnsiProcessor } from './AnsiProcessor';
import { HEADER_SIZE, useStyles } from './styles';
import classnames from 'classnames';
import { LogLine } from './LogLine';
import { LogViewerControls } from './LogViewerControls';
import { useLogViewerSearch } from './useLogViewerSearch';
import { useLogViewerSelection } from './useLogViewerSelection';

export interface RealLogViewerProps {
  text: string;
  className?: string;
}

export function RealLogViewer(props: RealLogViewerProps) {
  const classes = useStyles();
  const listRef = useRef<FixedSizeList | null>(null);

  // The processor keeps state that optimizes appending to the text
  const processor = useMemo(() => new AnsiProcessor(), []);
  const lines = processor.process(props.text);

  const search = useLogViewerSearch(lines);
  const selection = useLogViewerSelection(lines);

  useEffect(() => {
    if (search.resultLine !== undefined && listRef.current) {
      listRef.current.scrollToItem(search.resultLine - 1, 'center');
    }
  }, [search.resultLine]);

  const handleSelectLine = (
    line: number,
    event: { shiftKey: boolean; preventDefault: () => void },
  ) => {
    event.preventDefault();
    selection.setSelection(line, event.shiftKey);
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <div
          style={{ width, height }}
          className={classnames(classes.root, props.className)}
        >
          <div className={classes.header}>
            <LogViewerControls {...search} />
          </div>
          <FixedSizeList
            ref={listRef}
            className={classes.log}
            height={height - HEADER_SIZE}
            width={width}
            itemData={search.lines}
            itemSize={20}
            itemCount={search.lines.length}
          >
            {({ index, style, data }) => {
              const line = data[index];
              const { lineNumber } = line;
              return (
                <div
                  style={{ ...style }}
                  className={classnames(classes.line, {
                    [classes.lineSelected]: selection.isSelected(lineNumber),
                  })}
                >
                  {selection.shouldShowButton(lineNumber) && (
                    <IconButton
                      data-testid="copy-button"
                      size="small"
                      className={classes.lineCopyButton}
                      onClick={() => selection.copySelection()}
                    >
                      <CopyIcon fontSize="inherit" />
                    </IconButton>
                  )}
                  <a
                    role="row"
                    target="_self"
                    href={`#line-${lineNumber}`}
                    className={classes.lineNumber}
                    onClick={event => handleSelectLine(lineNumber, event)}
                    onKeyPress={event => handleSelectLine(lineNumber, event)}
                  >
                    {lineNumber}
                  </a>
                  <LogLine
                    line={line}
                    classes={classes}
                    searchText={search.searchText}
                    highlightResultIndex={
                      search.resultLine === lineNumber
                        ? search.resultLineIndex
                        : undefined
                    }
                  />
                </div>
              );
            }}
          </FixedSizeList>
        </div>
      )}
    </AutoSizer>
  );
}
