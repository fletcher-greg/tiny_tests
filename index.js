const assert = require("assert");
// Throw error with custom msg
function throwError(msg) {
  throw new Error(msg);
}
// Helper function
const throwIfNotNumber = (number) => {
  if (typeof number !== "number") {
    throwError(`typeof ${typeof number} is not a number`);
  }
};
function assertion(input) {
  const some = () =>
    input !== null || input !== undefined ? true : throwError("Is None");
  const none = () =>
    input === null || input === undefined ? true : throwError("Is Some");
  const toBe = (condition) => assert.strictEqual(input, condition);
  const deepEqual = (condition) => assert.deepStrictEqual(input, condition);
  const contains = (condition) =>
    input.includes(condition)
      ? true
      : throwError("Does not contain -->" + condition);
  function greaterThan(number) {
    throwIfNotNumber(input);
    if (input > number) return true;
    throwError("Not greater than");
  }
  function greaterThanOrEqual(number) {
    throwIfNotNumber(input);
    if (input >= number) return true;
    throwError("Less than");
  }
  function lessThan(number) {
    throwIfNotNumber(input);
    if (input < number) return true;
    throwError("Is not less than");
  }
  function lessThanOrEqual(number) {
    throwIfNotNumber(input);
    if (input <= number) return true;
    throwError("Is greater than");
  }
  return {
    some,
    none,
    toBe,
    deepEqual,
    contains,
    greaterThan,
    greaterThanOrEqual,
    lessThan,
    lessThanOrEqual,
  };
}

function test(msg, cb, logging) {
  try {
    cb();
    console.log(`✅ ${msg}`);
  } catch (e) {
    if (logging) console.log(e);
    console.log(`❌ ${msg}`);
  }
}
