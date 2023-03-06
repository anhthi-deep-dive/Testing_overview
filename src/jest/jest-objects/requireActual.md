# requireActual

`Returns the actual module` instead of `a mock`, bypassing all checks on whether the module should receive a mock implementation or not

```
  jest.mock('../myModule', () => ({
    __esModule: true, // Use it when dealing with esModules
    ...jest.requireActual('../myModule'),
    getRandom: jest.fn(() => 10),
  }));
```
