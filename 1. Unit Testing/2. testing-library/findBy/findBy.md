# findBy Queries

The findBy methods are `a combination of getBy queries and waitFor`
The findBy queries work when you `expect an element to appear` but `the change to the DOM might not happen immediately`

```
  await screen.findByText('text', queryOptions, waitForOptions)
```
