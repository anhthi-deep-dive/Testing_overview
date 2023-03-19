# mockImplementation

Accepts a function that should be `used as the implementation of the mock`

Tip: `jest.fn(implementation)` is a shorthand for `jest.fn().mockImplementation(implementation)`

```
  const mockFn = jest.fn(scalar => 42 + scalar);

  mockFn(0); // 42
  mockFn(1); // 43

  mockFn.mockImplementation(scalar => 36 + scalar);

  mockFn(2); // 38
  mockFn(3); // 39
```

The mockImplementation() can also be used to `mock class constructors`

```
  module.exports = class SomeClass {
    method(a, b) {}
  };
```

```
  const SomeClass = require('./SomeClass');
  jest.mock('./SomeClass');

  const mockMethod = jest.fn().mockReturnValue(42);
  SomeClass.mockImplementation(() => {
    return {
      method: mockMethod,
    };
  });

  const some = new SomeClass();
  some.method('a', 'b'); // return 42
```
