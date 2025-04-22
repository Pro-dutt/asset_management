# Table Data

The `tableData` object is created using the `getTableData` function, which transforms the raw data (`initializeTableData`) into a format expected by the `table component`. 

1. **Basic Table Information**:
   - title
   - URL info for data fetching
   - Pagination details
   - Sorting configuration
   - Row click handler
   - External filters configuration
   - Table header configuration

2. **The Rows Data Structure**:
   Each item in the `rows` array (which is created by mapping over `data.data`) contains these properties:

   - **Id**: 
     - `key`: "_id"
     - `value`: Contains the actual ID value
     - `type`: "hidden" (indicating this column should be hidden in UI)

   - **User**: 
     - `key`: "name"
     - `value`: A React component (`<UserAvatar>`) displaying user info
     - `originalValue`: Capitalized user name
     - `suggestionValue`: Same as originalValue, used for searching/filtering

   - **Role**:
     - `key`: "role"
     - `value`: A React component showing role with an icon

   - **Plan**:
     - `key`: "plan"
     - `value`: The plan name as plain text

   - **billing**: 
     - `key`: "billing"
     - `value`: A styled span showing billing information

   - **status**:
     - `key`: "status"
     - `value`: A styled span showing status with appropriate CSS class

3. **Action Configuration**:
   - The `actionData` array defines operations that can be performed on each row:
     - Delete
     - View
     - Edit
     - Duplicate

- `key`: The property name in the original data
- `value`: What to display (can be text or a React component)
- Additional properties like `type`, `originalValue`, etc. when needed

## Functionalities of Table Component

This structure allows the Table component to:
1. Know how to display each field
2. Handle sorting, filtering, and searching
3. Manage row actions
4. Connect UI interactions back to the original data

