# within

The within (an alias to getQueriesForElement) `takes a DOM element` and `binds it to the raw query functions`, allowing them to be used `without specifying a container`

```
  import {render, within} from '@testing-library/react'

  const {getByText} = render(<MyComponent />);
  const messages = getByText('messages');
  const helloMessage = within(messages).getByText('hello');
```
