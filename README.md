![Written in TypeScript](https://flat.badgen.net/badge/icon/typescript?icon=typescript&label) [![npm](https://flat.badgen.net/npm/v/@mtti/funcs?icon=npm)](https://www.npmjs.com/package/@mtti/funcs) [![Travis](https://flat.badgen.net/travis/mtti/funcs?icon=travis)](https://travis-ci.org/mtti/funcs) [![License](https://flat.badgen.net/github/license/mtti/funcs)](https://github.com/mtti/funcs/blob/master/LICENSE)

This is my personal collection of small TypeScript utility functions.

## Conventions

If a function's name starts with `assert`, it checks that its argument(s) match some expectation and will throw an error if they don't, but won't return anything.

If a function's name starts with `expect`, it will transform its arguments into its return value if possible, or throw an error if not. For example: `expectSingle()`.

If a function's name start with `is`, it checks that its argument(s) match some expectation and will return a boolean accordingly. They can also be type guards.

## Functions

### ensureEndsWith

```typescript
const ensureEndsWith = (subject: string, suffix: string): string
```

Add a suffix to a string if it doesn't already have it.

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

### expectSingle

```typescript
function expectSingle<T>(source: T|T[]): T
```

Given a single item or an array with a single item, returns that item. Throws an error if given an array with more than one item.

Kind of an opposite of `toArray()`.

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
