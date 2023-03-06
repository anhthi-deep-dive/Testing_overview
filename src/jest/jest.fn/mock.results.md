# mock.results

An array containing the results of all calls that have been made to this mock function

```
  mockFn("arg1", "arg2"); // return 3
  mockFn("arg3", "arg4"); // return 4

  // The return value of the first call to the function was 'return value'
  expect(mockFn.mock.results[0].value).toBe('3');
```
