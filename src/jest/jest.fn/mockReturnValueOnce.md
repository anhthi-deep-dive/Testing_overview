# mockReturnValueOnce

Shorthand for `jest.fn().mockImplementation(() => value)`

```
  const mockFn = jest
    .fn()
    .mockReturnValue('default')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  mockFn(); // 'first call'
  mockFn(); // 'second call'
  mockFn(); // 'default'
  mockFn(); // 'default'
```
