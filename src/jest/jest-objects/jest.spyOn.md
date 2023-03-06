# jest.spyOn

Creates a mock function `similar to jest.fn` but also `tracks calls to object[methodName]`. `Returns a Jest mock function`

If you want to `overwrite the original function`, you can use

- `jest.spyOn(object, methodName).mockImplementation(() => customImplementation)`
- `jest.replaceProperty(object, methodName, jest.fn(() => customImplementation))`

```
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  test('plays video', () => {
    const spy = jest.spyOn(video, 'play');
    const isPlaying = video.play();

    expect(spy).toHaveBeenCalled();
    expect(isPlaying).toBe(true);
  });
```
