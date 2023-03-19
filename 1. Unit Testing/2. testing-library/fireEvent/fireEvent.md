# fireEvent

Convenience methods for firing DOM events. E.g: click, change, blur, keyUp/Down...

```
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, {
    target: { value: 'Apple' }
  })
```

```
  render(<Button onClick={handleClick}>Click Me</Button>)
  fireEvent.click(screen.getByText(/click me/i))
```
