# mockFn.mock.calls

An array containing the `call arguments of all calls` that have been made to this mock function

```
  mockFn("arg1", "arg2");
  mockFn("arg3", "arg4");

  expect(mockFn.mock.calls).toBe([
    ["arg1", "arg2"],
    ["arg3", "arg4"],
  ]);

  // The function was called exactly twice
  expect(mockFn.mock.calls).toHaveLength(2);

  // The first arg of the first call to the function was 'first arg'
  expect(mockFn.mock.calls[0][0]).toBe('first arg');
```
