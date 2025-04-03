# Custom Hooks: Purpose and Performance Considerations

## Present in `src/lib/hooks`

## useDebounce
### Performance Enhancement Purpose
- Reduces unnecessary function calls or re-renders
- Prevents rapid, repeated executions of expensive operations
- Particularly useful for:
  - Search input fields
  - API call throttling
  - Minimizing performance overhead from user interactions

### Example Implementation
```javascript
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Creates a timeout to delay value update
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup prevents memory leaks
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

## useLocalStorage
### Purpose Beyond Performance
- Provides persistent state storage
- Synchronizes state between browser storage and React state
- Offers a clean abstraction for localStorage interactions
- Helps manage application state persistence

### Example Implementation
```javascript
function useLocalStorage(key, initialValue) {
  // Read stored value or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Update both local storage and state
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value;
      
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

## useHasPermission
### Purpose
- Access control and authorization management
- Centralizes permission logic
- Provides declarative way to check user permissions
- Improves security and user experience

### Example Implementation
```javascript
function useHasPermission(requiredPermissions) {
  const { user } = useAuth(); // Assuming an auth context exists

  return useMemo(() => {
    // Check if user has all required permissions
    return requiredPermissions.every(permission => 
      user.permissions.includes(permission)
    );
  }, [user, requiredPermissions]);
}
```

## Performance and Optimization Aspects
- These hooks are primarily about:
  1. Code organization
  2. Reusability
  3. Separation of concerns
  4. Performance optimization (in some cases)

### Key Performance Benefits
- Memoization (useMemo)
- Reducing unnecessary re-renders
- Centralizing complex logic
- Lazy initialization
- Efficient state management

### When to Use
- When logic is repeated across components
- To abstract complex stateful behavior
- To improve code readability
- When you need consistent behavior across the application