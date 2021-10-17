## API Report File for "@backstage/test-utils-core"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ReactElement } from 'react';
import { RenderResult } from '@testing-library/react';

// Warning: (ae-missing-release-tag) "AsyncLogCollector" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type AsyncLogCollector = () => Promise<void>;

// Warning: (ae-missing-release-tag) "CollectedLogs" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type CollectedLogs<T extends LogFuncs> = {
  [key in T]: string[];
};

// Warning: (ae-missing-release-tag) "Keyboard" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class Keyboard {
  constructor(
    target: any,
    {
      debug,
    }?: {
      debug?: boolean | undefined;
    },
  );
  // (undocumented)
  click(): Promise<void>;
  // (undocumented)
  debug: boolean;
  // (undocumented)
  document: any;
  // (undocumented)
  enter(value: any): Promise<void>;
  // (undocumented)
  escape(): Promise<void>;
  // (undocumented)
  get focused(): any;
  // (undocumented)
  static fromReadableInput(input: any): any;
  // (undocumented)
  _log(message: any, ...args: any[]): void;
  // (undocumented)
  _pretty(element: any): string;
  // (undocumented)
  send(chars: any): Promise<void>;
  // (undocumented)
  _sendKey(key: any, charCode: any, action: any): Promise<void>;
  // (undocumented)
  tab(): Promise<void>;
  // (undocumented)
  static toReadableInput(chars: any): any;
  // (undocumented)
  toString(): string;
  // (undocumented)
  static type(target: any, input: any): Promise<void>;
  // (undocumented)
  type(input: any): Promise<void>;
  // (undocumented)
  static typeDebug(target: any, input: any): Promise<void>;
}

// Warning: (ae-missing-release-tag) "LogCollector" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type LogCollector = AsyncLogCollector | SyncLogCollector;

// Warning: (ae-missing-release-tag) "LogFuncs" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type LogFuncs = 'log' | 'warn' | 'error';

// Warning: (ae-missing-release-tag) "renderWithEffects" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function renderWithEffects(nodes: ReactElement): Promise<RenderResult>;

// Warning: (ae-missing-release-tag) "SyncLogCollector" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type SyncLogCollector = () => void;

// Warning: (ae-missing-release-tag) "withLogCollector" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
// Warning: (ae-missing-release-tag) "withLogCollector" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
// Warning: (ae-missing-release-tag) "withLogCollector" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
// Warning: (ae-missing-release-tag) "withLogCollector" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function withLogCollector(
  callback: AsyncLogCollector,
): Promise<CollectedLogs<LogFuncs>>;

// @public (undocumented)
export function withLogCollector(
  callback: SyncLogCollector,
): CollectedLogs<LogFuncs>;

// @public (undocumented)
export function withLogCollector<T extends LogFuncs>(
  logsToCollect: T[],
  callback: AsyncLogCollector,
): Promise<CollectedLogs<T>>;

// @public (undocumented)
export function withLogCollector<T extends LogFuncs>(
  logsToCollect: T[],
  callback: SyncLogCollector,
): CollectedLogs<T>;
```