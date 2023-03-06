# replaceProperty

`Replace object[propertyKey] with a value`

```
  module.exports = {
    isLocalhost() {
      return process.env.HOSTNAME === 'localhost';
    },
  }
```

```
  const utils = require('./utils');

  test('isLocalhost returns true when HOSTNAME is localhost', () => {
    jest.replaceProperty(process, 'env', {HOSTNAME: 'localhost'});
    expect(utils.isLocalhost()).toBe(true);
  });
```
