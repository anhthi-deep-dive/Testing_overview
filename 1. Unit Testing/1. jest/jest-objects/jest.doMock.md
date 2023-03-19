# jest.doMock

When using babel-jest, `calls to mock` will automatically be `hoisted to the top of the code block (above import)`. `Use the jest.doMock` method if you want to explicitly `avoid this behavior`

```
  test('moduleName 1', () => {
    jest.doMock('../moduleName', () => {
      return jest.fn(() => 2);
    });
    const moduleName = require('../moduleName');
    expect(moduleName()).toBe(2);
  });
```
