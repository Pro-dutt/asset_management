# Context API (Context Folder)

Managing state has been a critical aspect of making web applications with React.
The most basic way is through `Prop drilling`.
Passing props from parent component to the other components

## Setting up a context provider

1. Import `createContext` and `useContext` from React
2. Import custom hooks from a hooks directory
3. Create a context with `createContext(null)`
4. Define a Provider component that:
    - Uses custom hooks to manage domain-specific state
    - Spreads all hooks into the context value
    - Wraps children with the Context.Provider
5. Export a custom hook that:
    - Consumes the context
    - Checks if it's used within the proper provider
    - Returns the context value

## Basic way of creating a context

```javascript
    // Create Context
    const AnyContext = createContext(null);

    //Provider Component
    export const AnyProvider = ({children}) => {
        // Use custom hooks to get the state
        const AnyState = customHook();

        // Provide context value to the children
        return(
            <AnyContext.Provider
                value={{
                    ...AnyState,
                    ...more states
                }}
            >
                {children}
            </AnyContext.Provider>
        )

    }

```

## Uses of Context API-

Context API is versatile and can be used in various scenarios where managing state and sharing data across multiple components is necessary.

Can handle global state management 

## Naming Convention

In a simple naming convention the Provider has- Name of the file + Provider(as the suffix)
