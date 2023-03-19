# Spy on react-redux

```
import * as reactRedux from 'react-redux';

const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');
const useSelectorSpy = jest.spyOn(reactRedux, 'useSelector');
const mockDispatch = jest.fn();

describe('Comp component', () => {
  beforeEach(() => {
    useDispatchSpy.mockReturnValue(mockDispatch);
    useSelectorSpy.mockReturnValueOnce(1);
    useSelectorSpy.mockReturnValueOnce(2);
  });
})
```
