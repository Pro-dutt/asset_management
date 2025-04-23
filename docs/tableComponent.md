# Table Component

## Overview
The Table Component is a comprehensive React solution for displaying, managing, and interacting with tabular data. It combines multiple specialized sub-components to provide a complete data management experience with minimal integration effort.

## Core Features
- **Data Filtering**: Filter records based on multiple criteria
- **Search Functionality**: Quick text-based search across records
- **Pagination**: Navigate through large datasets with customizable page sizes
- **Error Handling**: Graceful management of data loading and processing errors
- **View Switching**: Toggle between grid view and kanban view
- **Custom Routing**: URL-based state management for shareable views

## Component Integration Diagram
```
┌─────────────────────────────────┐
│            TableComponent       │
├─────────┬──────────┬────────────┤
│TableHead│TableBody │TableError  │
├─────────┴──────────┴────────────┤
│TableFilter  │  TableSearch      │
├─────────────┴───────────────────┤
│TablePagination                  │
└─────────────────────────────────┘
```

## Props API
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `tableData` | Object | Yes | Configuration and data for the table |
| `url` | String | Yes | API endpoint for data fetching |
| `initialFilters` | Object | No | Default filter values |
| `customRouter` | Object | No | Custom router instance |
| `errorHandler` | Function | No | Custom error handling function |

## Custom Router Integration

The table component utilizes a custom router hook for URL-based state management, making filtered and paginated views shareable via URL.

### The `useCustomRouter` Hook

```javascript
import { useNavigate, useLocation } from 'react-router-dom';

function useCustomRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  
  return {
    // Replace current history entry with new URL parameters
    replace: (searchParams) => {
      navigate(`${location.pathname}${searchParams}`, { replace: true });
    },
    
    // Add new history entry with new URL parameters
    push: (searchParams) => {
      navigate(`${location.pathname}${searchParams}`);
    }
  };
}

export default useCustomRouter;
```

### Implementation Example

```javascript
import useCustomRouter from './hooks/useCustomRouter';
import { useSearchParams } from 'react-router-dom';

function MyTableComponent() {
  const router = useCustomRouter();
  const [searchParams] = useSearchParams();
  
  // Transform URL parameters into a JavaScript object
  const initialValues = useMemo(() => 
    Object.fromEntries(searchParams.entries()),
    [searchParams]
  );
  
  // Example: Navigate to filtered view
  const applyFilter = (filterName, filterValue) => {
    router.push(`?${filterName}=${filterValue}`);
  };
  
  return (
    <Table 
      initialValues={initialValues}
      router={router}
      // ...other props
    />
  );
}
```

## Error Handling

The Table Component implements a comprehensive error handling strategy. For detailed implementation, refer to [Error Handling Documentation](./tableErrorHandling.md).

Key aspects include:
- State-based error management
- Try-catch patterns for data operations
- Dedicated error UI components
- Empty state handling

## Data Structure

The table component expects data in a specific format. For detailed information about the data structure, refer to [Table Data Documentation](./tableData.md).

## Related Components
- [Table Filter](./tableFilter.md)
- [Table Search](./tableSearch.md)
- [Table Pagination](./tablePagination.md)
- [Table Header](./tableHeader.md)