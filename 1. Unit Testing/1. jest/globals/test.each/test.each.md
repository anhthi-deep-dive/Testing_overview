# test.each

```
  test.each([
    {a: 1, b: 1, expected: 2},
    {a: 1, b: 2, expected: 3},
    {a: 2, b: 1, expected: 3},
  ])('should add($a, $b) return $expected', ({a, b, expected}) => {
    expect(a + b).toBe(expected);
  });
```

```
  test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `('should add($a, $b) return $expected', ({a, b, expected}) => {
    expect(a + b).toBe(expected);
  });
```
