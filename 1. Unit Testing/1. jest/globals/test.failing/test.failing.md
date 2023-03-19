# test.failing

Use test.failing when you are writing a test and `expecting it to fail`. If failing test will `throw any errors` then `it will pass`

```
  test.failing('it is not equal', () => {
    expect(5).toBe(6); // this test will pass
  });

  test.failing('it is equal', () => {
    expect(10).toBe(10); // this test will fail
  });
```
