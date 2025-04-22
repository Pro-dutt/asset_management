# TableHeader

Takes the parameters:
1. data
2. setCheckboxState
3. checkboxState
4. initiallValues
5. router
6. searchParams

- `sort` would be a state variable
- `sortBy` would take the initialValues. Data will be sorted according to the initialSort
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

