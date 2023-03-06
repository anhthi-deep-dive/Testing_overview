# Jest.mock()

## # Mocking Modules

```
  import axios from 'axios';
  import Users from './users';

  jest.mock('axios');

  test('should fetch users', () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};

    axios.get.mockResolvedValue(resp);
    // axios.get.mockImplementation(() => Promise.resolve(resp))
    return Users.all().then(data => expect(data).toEqual(users));
  });
```

## # Mocking Partials

```
  import defaultExport, {bar, foo} from '../foo-bar-baz';

  jest.mock('../foo-bar-baz', () => {
    return {
      __esModule: true,
      ...jest.requireActual('../foo-bar-baz');,
      default: jest.fn(() => 'mocked baz'),
      foo: 'mocked foo',
    };
  });

```

## # Mock Implementations

```
  // foo.js
  module.exports = function () {
    // some implementation;
  };
```

```
  jest.mock('../foo');
  const foo = require('../foo');

  foo.mockImplementation(() => 42);
  foo(); // 42
```
