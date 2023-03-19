# Using Fake Timers

When using fake timers in your tests, `all of the code` inside your test `uses fake timers`

When using fake timers, you need to remember to restore the timers after your test runs

```
  beforeEach(() => {
    jest.useFakeTimers()
  });
```

```
  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  });
```
