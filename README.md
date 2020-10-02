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
assertion("Hello World").toBe("Hello World");
```

#### DeepEquals (for object/array equality)

```js
const a = { name: "Alonzo Church", lambdaCalculasLevel: "pro" };
const b = a;
assertion(a).deepEqual(b);
```

#### Some

```js
// is not null or undefined
assertion(null).some();
```

#### None

```js
assertion(null).none();
```

#### Contains

```js
assertion(['apple','ice cream' 'pizza']).contains('pizza')
```

#### Greater than

```js
asserion(10).greaterThan(1);
```

### Greater than or equal

```js
assertion(10).greatThanOrEqual(10);
```

#### Less Than

```js
assertion(10).lessThan(20);
```

#### Less than or equal

```js
assertion(10).lessThanOrEqual(10);
```
