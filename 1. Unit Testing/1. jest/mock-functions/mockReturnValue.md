# mockFn.mockReturnValue(value)

Shorthand for `jest.fn().mockImplementation(() => value)`

```
  const mock = jest.fn();

  mock.mockReturnValue(42);
  mock(); // 42

  mock.mockReturnValue(43);
  mock(); // 43
```
