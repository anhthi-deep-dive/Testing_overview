# jest.fn

`Returns a new, unused mock function`. Optionally takes a mock implementation.

```
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();
```

```
  const returnsTrue = jest.fn(() => true);
  console.log(returnsTrue()); // true;
```
