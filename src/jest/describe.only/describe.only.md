# describe.only

You can use describe.only if you want to `run only one describe block`

```
  describe.only('my beverage', () => {
    test('is delicious', () => {
      expect(myBeverage.delicious).toBeTruthy();
    });
  });

  describe('my other beverage', () => {
    // ... will be skipped
  });
```
