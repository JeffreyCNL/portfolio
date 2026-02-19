# TypeScript Best Practices for React Developers

TypeScript has become the standard for building React applications, providing type safety and better developer experience. In this article, we'll explore essential TypeScript patterns and practices that will help you write more maintainable and type-safe React code.

## Why TypeScript with React?

TypeScript offers several advantages:

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Autocomplete and IntelliSense
- **Self-Documenting Code**: Types serve as documentation
- **Refactoring Confidence**: Safe refactoring with type checking

## Essential Type Patterns

### Component Props

Always define proper types for your component props:

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export function Button({ 
  label, 
  onClick, 
  disabled = false,
  variant = 'primary' 
}: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  );
}
```

### Using React.FC

While `React.FC` is available, many developers prefer explicit prop types:

```typescript
// Explicit (preferred)
function MyComponent({ name }: { name: string }) {
  return <div>{name}</div>;
}

// Using React.FC
const MyComponent: React.FC<{ name: string }> = ({ name }) => {
  return <div>{name}</div>;
};
```

### Event Handlers

Properly type your event handlers:

```typescript
function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
    </form>
  );
}
```

## Advanced Patterns

### Generic Components

Use generics for reusable components:

```typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
```

### Utility Types

Leverage TypeScript utility types:

```typescript
// Partial: Make all properties optional
type PartialUser = Partial<User>;

// Pick: Select specific properties
type UserPreview = Pick<User, 'id' | 'name' | 'email'>;

// Omit: Exclude specific properties
type UserWithoutId = Omit<User, 'id'>;
```

## Common Pitfalls to Avoid

1. **Using `any`**: Avoid `any` type - use `unknown` if you must
2. **Ignoring Type Errors**: Fix type errors, don't suppress them
3. **Overusing Type Assertions**: Use type guards instead
4. **Not Typing Props**: Always type component props

## Best Practices

1. **Enable Strict Mode**: Use `strict: true` in `tsconfig.json`
2. **Use Type Guards**: Create functions to narrow types
3. **Leverage Discriminated Unions**: For better type narrowing
4. **Document Complex Types**: Add JSDoc comments for complex types

## Conclusion

TypeScript with React provides a powerful combination for building robust applications. By following these best practices, you'll write more maintainable, type-safe code that's easier to refactor and debug.

Happy typing!
