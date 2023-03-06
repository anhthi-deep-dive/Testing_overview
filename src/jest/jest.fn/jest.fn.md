# Jest.fn()

## # .mock property

All mock functions have `this special .mock property`, which is where `data about how the function has been called` and `what the function returned is kept`

```
  const mockFn = jest.fn();
  const a = new mockFn();
  console.log(mockFn.mock.instances);

  // The function was called exactly once
  expect(mockFn.mock.calls).toHaveLength(1);

  // The first arg of the first call to the function was 'first arg'
  expect(mockFn.mock.calls[0][0]).toBe('first arg');

  // The return value of the first call to the function was 'return value'
  expect(mockFn.mock.results[0].value).toBe('return value');

  // The function was called with a certain `this` context: the `element` object.
  expect(mockFn.mock.contexts[0]).toBe(element);

  // The object returned by the first instantiation of this function
  // had a `name` property whose value was set to 'test'
  expect(mockFn.mock.instances[0].name).toBe('test');

  // This function was instantiated exactly twice
  expect(mockFn.mock.instances.length).toBe(2);

  // The first argument of the last call to the function was 'test'
  expect(mockFn.mock.lastCall[0]).toBe('test');
```

## # Mock Return Values

```
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());
  // > 10, 'x', true, true
```

## # Mock Implementations

```
  const myMockFn = jest.fn(() => 42);
  myMockFn() // 42
```
