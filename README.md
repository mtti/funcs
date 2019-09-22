
This is my personal collection of small TypeScript utility functions.

## Conventions

If a function's name starts with `assert`, it checks that its argument(s) match some expectation and will throw an error if they don't, but won't return anything.

If a function's name starts with `expect`, it will transform its arguments into its return value if possible, or throw an error if not. For example: `expectSingle()`.

If a function's name start with `is`, it checks that its argument(s) match some expectation and will return a boolean accordingly. They can also be type guards.

## Functions

### expectSingle

```typescript
function expectSingle<T>(source: T|T[]): T
```

Given a single item or an array with a single item, returns that item. Throws an error if given an array with more than one item.

Kind of an opposite of `toArray()`.

### fromEntries

```typescript
function fromEntries<K extends string | number | symbol, V>(entries: [string, V][]): Record<K, V>
```

Creates an object from an array of key-value pairs.

The opposite of `Object.entries()` for when your environment doesn't support [`Object.fromEntries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries).

### toArray

```typescript
function toArray<T>(value: T|T[]): T[]
```

When you want to accept either an individual thing **or** an array of things but only want to deal with the array version, this function will take either an existing array and return it directly, or an individual item and return an array containing just it.
