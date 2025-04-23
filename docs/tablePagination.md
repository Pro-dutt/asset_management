# Table Pagination Component (Continued)

### 4. generateOptions (continued)

```javascript
const generateOptions = (limitConfig) => {
  const options = [];
  const start = limitConfig?.limitStart || 10;
  const end = limitConfig?.limitEnd || 50;
  const step = limitConfig?.multipleOf || 10;
  
  for (let i = start; i <= end; i += step) {
    options.push({
      label: String(i),
      value: String(i)
    });
  }
  
  return options;
};
```

#### Parameters:
- `limitConfig`: Configuration object for items-per-page options
  - `limitStart`: First option value (default: 10)
  - `limitEnd`: Last option value (default: 50)
  - `multipleOf`: Step between options (default: 10)

#### Returns:
- Array of option objects with label and value properties

### 5. handleFirstPage and handleLastPage

Navigation functions for jumping to first or last page.

```javascript
const handleFirstPage = useCallback(() => {
  setPagination(prev => ({
    ...prev,
    page: 1
  }));
  setQueryParam("page", 1);
}, [setQueryParam]);

const handleLastPage = useCallback(() => {
  const lastPage = data?.pagination?.totalPages || 1;
  setPagination(prev => ({
    ...prev,
    page: lastPage
  }));
  setQueryParam("page", lastPage);
}, [setQueryParam, data?.pagination?.totalPages]);
```

## Complete Implementation

```jsx
function TablePagination({ 
  data, 
  router, 
  searchParams, 
  initialValues, 
  onPageChange,
  limitConfig 
}) {
  // Get current page from URL or default to 1
  const urlPage = Number(searchParams.get('page') || initialValues?.page || 1);
  const itemsPerPage = Number(searchParams.get('limit') || initialValues?.limit || 10);
  
  // Internal pagination state
  const [pagination, setPagination] = useState({
    page: urlPage,
    limit: itemsPerPage
  });
  
  // Current form values state
  const [formValues, setFormValues] = useState({
    limit: String(itemsPerPage)
  });
  
  // Early return if no pagination data
  if (!data || !data.pagination) {
    return null;
  }
  
  return (
    <div className="table-pagination">
      {/* Item range display */}
      <div className="pagination-range">
        {data.pagination.totalItemCount > 0 && (
          <span>Items {itemRange} of {data.pagination.totalItemCount}</span>
        )}
      </div>
      
      {/* Pagination controls */}
      <div className="pagination-controls">
        <ReactPaginate
          previousLabel={<ChevronLeft />}
          previousClassName="pagination-previous"
          nextLabel={<ChevronRight />}
          nextClassName="pagination-next"
          breakLabel="..."
          pageCount={data.pagination.totalPages || 1}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="pagination-container"
          activeClassName="active"
          forcePage={(pagination.page - 1)}
          disabledClassName="disabled"
        />
      </div>
      
      {/* Items per page selector */}
      <div className="pagination-limit">
        <span>Show</span>
        <SelectField
          formField={{
            id: "limit",
            name: "limit",
            options: generateOptions(data.limit),
            defaultValue: formValues?.["limit"] || data.limit?.defaultValue || "10",
            onChange: (event) => {
              const { name, value } = event.target;
              setFormValues(prev => ({ ...prev, [name]: value }));
              setQueryParam(name, value);
              // Reset to first page when changing limit
              setQueryParam("page", 1);
              setPagination(prev => ({ ...prev, page: 1, limit: Number(value) }));
            }
          }}
        />
        <span>per page</span>
      </div>
    </div>
  );
}
```

## Props to ReactPaginate

The component uses `ReactPaginate` with these configuration props:

| Prop | Description |
|------|-------------|
| `previousLabel` | Element/icon for "previous page" button |
| `previousClassName` | CSS class for previous button |
| `nextLabel` | Element/icon for "next page" button |
| `nextClassName` | CSS class for next button |
| `breakLabel` | Text for page breaks ("...") |
| `pageCount` | Total number of pages |
| `marginPagesDisplayed` | Number of pages at edges (default: 2) |
| `pageRangeDisplayed` | Number of pages around current page (default: 3) |
| `onPageChange` | Callback when page is clicked |
| `containerClassName` | CSS class for container element |
| `activeClassName` | CSS class for active page button |
| `forcePage` | Zero-based index of forced active page |
| `disabledClassName` | CSS class for disabled buttons |

## Integration Example

```jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useCustomRouter from '../hooks/useCustomRouter';
import TablePagination from './TablePagination';

function TableWithPagination({ tableData }) {
  const router = useCustomRouter();
  const [searchParams] = useSearchParams();
  
  const initialValues = React.useMemo(() => 
    Object.fromEntries(searchParams.entries()),
    [searchParams]
  );
  
  const limitConfig = {
    limitStart: 10,
    limitEnd: 100,
    multipleOf: 10
  };
  
  return (
    <div className="table-container">
      {/* Table component would go here */}
      
      <TablePagination
        data={tableData}
        router={router}
        searchParams={searchParams}
        initialValues={initialValues}
        limitConfig={limitConfig}
        onPageChange={(page) => console.log(`Page changed to ${page}`)}
      />
    </div>
  );
}
```

## Accessibility Features

1. **Keyboard Navigation**: All pagination controls are fully keyboard accessible
2. **Screen Reader Support**: Proper ARIA labels for pagination controls
3. **Focus Management**: Focus is preserved after page changes

## URL Parameter Integration

The pagination component manages these URL parameters:

| Parameter | Description | Example |
|-----------|-------------|---------|
| `page` | Current page number | `?page=3` |
| `limit` | Items per page | `?limit=20` |

These URL parameters allow for:
- Bookmarking specific pages
- Sharing links to specific pages
- Browser history navigation between pages
- Preserving pagination state on page refresh

## Related Components

- [Table Component](./tableComponent.md)
- [Table Header](./tableHeader.md)
- [Table Filter](./tableFilter.md)