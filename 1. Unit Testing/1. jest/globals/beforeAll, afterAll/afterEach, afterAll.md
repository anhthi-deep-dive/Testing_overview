# afterAll

Runs a function `after all the tests` in this file `have completed`.If the function `returns a promise or generator`, Jest `waits for` that promise to `resolve before continuing`

```
  afterAll(() => {
    cleanUpDatabase(globalDatabase);
  });
```

# beforeAll

Runs a function `before any of the tests in this file run`. If the function `returns a promise or generator`, Jest `waits for` that `promise to resolve`before running tests
