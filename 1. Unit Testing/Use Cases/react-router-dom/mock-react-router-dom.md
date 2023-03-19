# Mock react-router-dom

```
const mockHistoryPush = jest.fn();
const mockHistoryReplace = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requiredActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush(),
    replace: mockHistoryReplace
  });
}))
```
