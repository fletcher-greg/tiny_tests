# Tiny Tests

Tiny Tests is a small testing library. Just clone it and start straight away.

## API

```js
const { test, assertion } = require("tiny_tests/index.js");
// Simple example with toBe
test("it should equal 1", () => assertion(1).toBe(1)); // ✅ it should equal 1
```

#### Equals

```js
test("it should be equal", () => assertion("Hello World").toBe("Hello World")); // ✅ it should be equal
```

#### DeepEquals (for object/array equality)

```js
const a = { name: "Alonzo Church", lambdaCalculasLevel: "pro" };
const b = a;
test("both objects should be the same", () => assertion(a).deepEqual(b)); // ✅ both objects should be the same
```

#### Some

```js
// is not null or undefined
test("it should be some", () => assertion("Hello World").some()); // ✅ it should be some
```

#### None

```js
test("it should be null", () => assertion(null).none()); // ✅ it should be null
```

#### Contains

```js
test("it should contain 🍕", () =>
  assertion(["apple", "ice cream", "pizza"]).contains("pizza")); // ✅ it should contain 🍕
```

#### Greater than

```js
test("should be greater than", () => assertion(10).greaterThan(1)); // ✅ should be greater than
```

### Greater than or equal

```js
test("should be greater than or equal", () =>
  assertion(10).greaterThanOrEqual(10)); // ✅ should be greater than or equal
```

#### Less Than

```js
test("should be less than", () => assertion(10).lessThan(20)); // ✅ should be less than
```

#### Less than or equal

```js
test("should be less than or equal", () => assertion(10).lessThanOrEqual(10)); // ✅ should be less than or equal
```
