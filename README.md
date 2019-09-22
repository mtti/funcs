
This is my personal collection of small TypeScript utility functions.

## Functions

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
