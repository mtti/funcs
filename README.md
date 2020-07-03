[![Written in TypeScript](https://flat.badgen.net/badge/icon/TypeScript?icon=typescript&label)](http://www.typescriptlang.org/) [![npm](https://flat.badgen.net/npm/v/@mtti/funcs?icon=npm&label)](https://www.npmjs.com/package/@mtti/funcs) [![License](https://flat.badgen.net/github/license/mtti/funcs)](https://github.com/mtti/funcs/blob/master/LICENSE)

This is my personal collection of small TypeScript utility functions.

## Conventions

This library exposes pure functions. They always return the same value for the same arguments and they have no side effect.

This library has no external runtime dependencies. Functions in this library can depend on other functions from this library, but must be simple enough not to need external dependencies.

Functions whose names start with...

* `assert` check that their input matches some expectation and throw an error if they not, but won't return anything.
* `ensure` transform their input to match some condition if it does not already.
* `expect` transform their input into the return value if possible, or throw an error if not. For example: `expectSingle()`.
* `is` check that their input match some expectation and will return a boolean accordingly. They can also be type guards.

## Functions

### ensureEndsWith

```typescript
const ensureEndsWith = (subject: string, suffix: string): string
```

Add a suffix to a string if it doesn't already have it.

### ensureNotEndsWith

```typescript
const ensureNotEndsWith = (subject: string, suffix: string): string
```

Remove a suffix from a string if it has it.

### ensureNotStartsWith

```typescript
const ensureNotStartsWith = (subject: string, prefix: string): string
```

Removes a prefix from string if it has one.

### ensureStartsWith

```typescript
const ensureStartsWith = (subject: string, prefix: string): string
```

Add a prefix to a string if it doesn't already have it.

### expectInteger

```typescript
const expectInteger = (value: unknown): number
```

Checks if a value of unknown type is an integer `number` or a string representation of one and returns it as a `number` if it is, or throws an error if it's not.

### expectSingle

```typescript
function expectSingle<T>(source: T|T[]): T
```

Given a single item or an array with a single item, returns that item. Throws an error if given an array with more than one item.

Kind of an opposite of `toArray()`.

### expectString

```typescript
const expectString = (value: unknown): string
```

Checks if a value of unknown type is a string and returns it as such  if it is, otherwise throws an error.

## firstOf

```typescript
function firstOf<T>(arr: readonly T[]): T
```

Returns the last item of an array or throws an error if the input is not an array, or is an empty array.

### fromEntries

```typescript
function fromEntries<K extends string | number | symbol, V>(entries: readonly [string, V][]): Record<K, V>
```

Creates an object from an array of key-value pairs.

The opposite of `Object.entries()` for when your environment doesn't support [`Object.fromEntries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries).

### lastOf

```typescript
function lastOf<T>(arr: readonly T[]): T
```

Returns the last item of an array or throws an error if the input is not an array, or is an empty array.

### removeFalsies

```typescript
function removeFalsies<T>(arr: ReadonlyArray<T | Falsy>): T[]
```

Returns a copy of an array with falsy values removed.

### series

```typescript
function series<T = unknown>(tasks: Array<() => Promise<T>>): Promise<T[]>
```

Executes an array of asynchronous tasks in series, one by one.

### sleep

```typescript
function sleep(ms: number): Promise<void>
```

Returns a promise which will be resolved after the specified number of milliseconds. A helper to ease adding delays to `async` functions. Uses `setTimeout` so [the actual duration is not guaranteed](https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args).

### toArray

```typescript
function toArray<T>(value: T|T[]): T[]
```

When you want to accept either an individual thing **or** an array of things but only want to deal with the array version, this function will take either an existing array and return it directly, or an individual item and return an array containing just it.

## Types

### Falsy

```typescript
type Falsy = false | 0 | '' | null | undefined;
```

Most falsy values, except for `NaN`.
