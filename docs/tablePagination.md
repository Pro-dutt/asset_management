# Pagination of the Table Data

## Styling

The styling for the TablePagination Component is present in the "./index.css" of the folder structure

## **Variables**:

1. `urlPage`: Does a type casting of Number to the search parameter of page number or it is taken from initialValues of the page property. Otherwise page number 1 is taken as default.

2. `itemsPerPage`: The number of items per page is the limit of initial Values or the default is taken as 10.



## SetQueryParam function-

The function `setQueryParam` function uses React's `useCallback` hook. The function manipulates URL query parameters. The function works in this manner:

1. Creates a new `URLSearchParams` object from the current `seachParams` (converted to String)

2. If the value is true, it sets specificed key with the value in the query parameters

3. If the value is false (null, undefined, empty string), it removes the key from the query parameters.

4. If it navigates to the same route but with the updated query string using `router.replace`

5. The function is memoized and will only be recreated if `searchParms` or `router` changes.

## itemRange function-

The function works in this manner:

1. If the `totalItemCount` is null or undefined then return an empty string.

2. If Pagination data is available:

    - It calculates the `start` index using the formula **(pagination.page-1) * itemsPerPage + 1**
        - This gives the index of the first item of the current page (e.g on page 2 with 10 items per page would be 11)
    
    -   It calculates the `end` index using :**Math.min(pagination.page * itemsPerPage), data?.pagination?.totalItemCount**
        - This gives you either the theoretical last item on the page or the total number of items
        - The `math.min` is important fot the last page, which might not be completely filled.

3. The final output is a formatted string `"11 to 20"` representing the range of items shown.

4. The dependancies array [pagination.page, itemsPerPage, data?.pagination?.totalItemCount] ensures this calculation is only re-run when the page number, items per page or total item count changes.

## handlePageClick function-

1. The function takes an `event` parameter that contains information about which pages are were selected.

2. Inside the function:
    - The `newPage` variable calculates the new page number. The increment of 1 is there because many pagination libraries use zero based indexing

    - setPagination: updates the pagination state by creating a new obkect thtat preserves all previous pagination state value (...prev) and only updates the `page` property to the new page numbrt.

    - setQueryParam("page", newPage) updates the URL query parameeter name "page" to reflect the new page number

3. The dependency array setQueryParam utilises the callback function will only be recreated if the particular variable changes.

The function effectively handles the tasks when a user clicks on a page number in the pagination control:
    - Calculates# TableHeader

Takes the parameters:
1. data
2. setCheckboxState
3. checkboxState
4. initiallValues
5. router
6. searchParams

-`sort` would be a state variable
- `sortBy` would take the initialValues.Data will be sorted according to the initialSort
- `sortOrder` would take the initialValues or the data woud be sorted to give the initialSortOrder which would be ascending (considered default)
- If there is no data then null would be returned.

## updateQueryParams

Takes an object of URL query parameter `updates` and applies them to the current URL.

1. Parameters:
- updates: An object containing key-value pairs to update in the URL query parameters

2. Behavior:
- Creates a new URLSearchParms instance from the current searchParams
- For each key-value pair in the updates object:
	- If the value is true, sets the parameter with the key and value
	- If the value is false, it removes the paramter with that key
- Updates the URL using router.replace without triggering a page scroll
- Returns the Promise from router.replace

The function is memoized with useCallback to optimize performance, with dependancies on searchParams and router.

## getSortIcon

Returns the appropriate sort indicator icon for a table header column.

Parameters:
- headerItem: The identifier of the header column

Behavior:
- If the current sort is not applied to the header column:
  - Returns an arrow icon with the "initial_arrow" style
- If the current sort is applied to the header column:
  - For ascending sort order: Returns an arrow icon with the "up_arrow" style
  - For descending sort order: Returns an arrow icon with the "down_arrow" style

The function is memoized with useCallback to prevent unnecessary re-creation when components re-render, with a dependency on the sort state.

## handleSort function

Manages the sorting behavior when a table header is clicked.

Parameters:
- headerItem: The identifier of the header column that was clicked

Behavior:
- Toggles the sort order:
	- If the header column is already in ascending order it switches to descending
	- Otherwise it sts to ascending order
- Updates the local sort state with the new sorting configuration
- Updates the URL query parameters to reflect the new sort state
- returns a Promise that resolbes when the URL update is complete

The function is memoized with useCallback to optimize performance, with dependencies on the sort state and updateQueryParams function.


## Table Header Component Rendering

The code renders the table header with appropriate columns and functionality:

### Data Processing
- firstRow: Extracts the first row from the data.rows array for header generation
- headerItems: Creates an array of table headers byL
	- Taking Object.entries from the firstRow
	- Filterung out any entries where the value's type is "hidden"
	
### Rendered Output
- The component returns a table header with the following structure:

1. Checkbox Column(Conditional):
- Renders if `data.checkbox` is true
- Contains a CheckBoxField component with:
	- ID and name based on the current page number
	- onChange handler that updates the current page number
		- The header checkbox itself
		- All row checkboxes on the current page (based on page and limit values)

2. Data Column
- Maps throught the filtered headerItems array
- Each header cell contains:
	- The header label text
	- A sort icon (if data.sorting is enabled)
	- Click handler to trigger sorting (id data.sorting is enabled)

3. Actions Column
- Renders is `data.actionData` is true
- Simple header cell with "Actions" label

 the actual page number
    - Updates the application's internal pagination state

## handleFirst Page and handleLastPage function-

**handleFirstPage**: 
1. The function is wrapped in a useCallaback that handles jumping to the first page.
2. It updates the pagination state by setting the page property to 1 while preserving other pagination state values.
3. It also updates the URL query parameter "page" to 1
4. The function is memoized and recreated if setQueryParam changes

**handleLastPage:**

1. The function handles jumping to the last page of results
2. It updates the pagination state by setting the `page` property to the total number of pages (data?.pagiantion?.totalPage)
3. It also updates the URL query paramter "page" to reflect this last page number.
4. The function depends on both setQueryParam and data?.pagination?.totalPage

## Props passed to ReactPaginate

1. **previousLabel**:
    Pass an element/icon to render as the "previous page" button 

2. **previousClassname**:
     CSS class name to apply to the previous button element

3. **nextLabel**:
     Pass an element/icon to render as the "next page" button

4. **nextClassName**:
    CSS class name to apply to the next button element 

5. **breakLabel**: 
    Text/element to display for page breaks, typically ellipsis (you're using "...")

6. **pageCount** :
    Total number of pages

7. **marginPagesDisplayed**:
    Number of pages to display at the beginning/end when there are many pages (2 is used as default)

8. **pageRangeDisplayed**:
    Number of pages to display around the current page

9. **onPageChange**:
    Callback function that fires when user clicks a page

10. **containerClassName**:
    CSS class for the main pagination container

11. **activeClassName**:
    CSS class applied to the active/current page button

12. **forcePage**:
    Zero-based page index to force as the selected page
