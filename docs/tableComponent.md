# Table Component

## Functionalities provided by the table

In the main table component the functionalities present are:
1. [Filtering of Data]
2. [Searching of Data](./tableSearch.md)
3. [Pagination of Data](./tablePagination.md)
4. [Error Handling](./tableErrorHandling.md)
5. [Viewing the Table Data (...check)](./tableHeader.md)
6. Custom Routing

The useSearchParams returns the location of the object, say if the component is on the "localhost:3000/about" then the search parameter would be "/about".

A custom router hook is present whuch uses the useNavigate and useLocation hooks from react router dom

The `useCustomRouter` is a custom hook that returns an object with navigation methods.

Inside the Hook:
1. It calls `useNavigate()` to get the navigation function

Returned Methods
- replace(searchParams): Navigates to the provided path and replaces the current history entry
- push(searchParams): Navigates to to the provided path an adds a new entry to browser history.


### Utilisation of the Hook
```javascript
	import useCustomRouter from './path.to/useCustomRouter';
	
	function MyComponent() {
	const router = useCustomRouter();
	  
	 const handleButtonClick = () => {
	  // Navigate to a new page
	  router.push('/about');
	    
	  // Or replace current history entry
	  // router.replace('/contact');
	 };

	  return (
	    <button onClick={handleButtonClick}>Go to About</button>
	  );
}
```
The varialbles that are found:
1. router initialized from useCustomRouter
2. searchParams initialized from useSearchParams
3. initialValues- which utilises memoization to ensure that it is only recalculated when the actual search parameters change. 

	intitialValues uses `useMemo` to:
	i. Convert the search parameters into regular javaScript object using
		Object.fromEntries(searchParams.entries())

	The purpose of initialValues is to take all the query parameters from the URl and transform them into a plain Javascript object.
	For example: if the URL is "https://example.com/page?name=John&age=30"
	initialvalues- would be the object- {name: "John", age:"30"};
	
### [Structure of Data](./tableData.md)

### Error Handling

Error handling is implemented in a few key ways:

1. Error State Management:

- There's a dedicated state variable `error` intialized with `useState(null)`

- The errror state is displayed to users through the `<TableError error={error}>` component.

2. Try-Catch Block in Data Fetching:

- The fetchData function uses a try-catch pattern:

	- It firsts sets `isLoading` to true and clears any previous errors by setting `error` to null

	- In the try block, it attempts to fetch data using apiClient
	
	- If an error occurs, it's caught and handled in the catch block

	- The catch block logs the error to the console and sets a user-friendly error message

	- The finally block ensures `isLoading` is set back to false regardless of success or failure

3. Error Prevention:

- There's a URL existence check (if (!url) return) before attempting to fetch data

- This prevents unnecessary API calls when no URL is provided

4.  Error UI Presentation:

- The component delegates error display to a specialized `TableError` component

- Based on the imports and usage, the component likely renders error messages to the user

5. Empty Data Handling:

- The code has conditional rendering with `<DataNotFound message="Empty List"/>` when no rows are found in grid or kanban views.

- This handles the "no data" case gracefully rather than breaking the UI




