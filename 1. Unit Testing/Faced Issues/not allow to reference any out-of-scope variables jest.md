# Not allow to reference any out-of-scope variables Jest

Add a `mock prefix` to the `variable name`\
E.g: `mock`HandleGoBack

```
  const mockHandleGoBack = jest.fn();
  jest.mock('src/hooks/useBaseAppActions', () => {
    useBaseAppActions: () => ({
      handleGoBack: mockHandleGoBack,
    });
  });

  expect(mockHandleGoBack).toHaveBeenCalled();
```
