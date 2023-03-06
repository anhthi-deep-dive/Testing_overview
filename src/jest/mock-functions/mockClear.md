# mockClear

`Clears all information stored` in the

- mockFn.mock.calls
- mockFn.mock.instances
- mockFn.mock.contexts
- mockFn.mock.results

Often this is useful when you want to `clean up a mocks usage data` between `two assertions`

Beware that mockFn.mockClear() will `replace mockFn.mock`, `not just reset the values of its properties`
