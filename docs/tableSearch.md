# Table Search Component

## Overview
The `TableSearch` component provides text-based search functionality for filtering table data. It integrates with URL parameters to create bookmarkable and shareable search results.

## Visual Example
```
┌───────────────────────────┐  ┌─────────┐
│ Search users...           │  │ Search  │
└───────────────────────────┘  └─────────┘
```

## Props API

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `router` | Object | Yes | Router object for URL navigation |
| `initialValues` | Object | Yes | Initial values from URL parameters |
| `data` | Object | Yes | Search configuration object |
| `searchParams` | URLSearchParams | Yes | Current URL search parameters |
| `onSearch` | Function | No | Optional callback for search events |
| `className` | String | No | Additional CSS classes |

## Core Functions

### 1. setQueryParam

Updates a single URL query parameter and navigates to the updated URL.

```javascript
const setQueryParam = useCallback((key, value) => {
  // Create a new URLSearchParams object from current params
  const newSearchParams = new URLSearchParams(searchParams.toString());
  
  // Set or remove the parameter based on value
  if (value) {
    newSearchParams.set(key, value);
  } else {
    newSearchParams.delete(key);
  }
  
  // Navigate to same route with updated query string
  return router.replace(`?${newSearchParams.toString()}`);
}, [searchParams, router]);
```

### 2. generateOptions Function

Generates a range of options for the items-per-page dropdown.

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

### 3. getFormData Function

Processes and enhances filter configuration objects with necessary event handlers and state connections.

```javascript
const getFormData = (data) => {
  if (!data?.filters) return [];
  
  return data.filters.map(item => ({
    ...item,
    clearOption: true,
    customOnChange: (e) => {
      const { name, value } = e.target;
      setFormValues(prev => ({ ...prev, [name]: value }));
      
      // If searchOnChange is enabled, update URL parameters immediately
      if (data.searchOnChange) {
        setQueryParam(name, value);
        
        // Reset to first page when search criteria changes
        setQueryParam("page", 1);
      }
    },
    defaultValue: formValues?.[item.name] || "",
    style: { padding: "8px 12px", marginRight: "12px" }
  }));
};
```

## Implementation

```jsx
function TableSearch({ 
  router, 
  initialValues, 
  data, 
  searchParams,
  onSearch,
  className
}) {
  // Get initial search query from URL or default to empty
  const initialSearch = searchParams.get('search') || initialValues?.search || '';
  
  // State for form values
  const [formValues, setFormValues] = useState({
    search: initialSearch,
    limit: initialValues?.limit || "10"
  });
  
  // Handle search form submission
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    // Update URL with search parameter
    setQueryParam("search", formValues.search);
    
    // Reset to first page on new search
    setQueryParam("page", 1);
    
    // Call optional callback if provided
    if (onSearch) {
      onSearch(formValues.search);
    }
  }, [formValues.search, setQueryParam, onSearch]);
  
  // Handle search input change
  const handleSearchChange = useCallback((e) => {
    const { value } = e.target;
    setFormValues(prev => ({ ...prev, search: value }));
    
    // If immediate search is enabled, update URL parameters
    if (data?.searchOnChange) {
      setQueryParam("search", value);
      setQueryParam("page", 1);
    }
  }, [data?.searchOnChange, setQueryParam]);
  
  // Handle clearing search
  const handleClearSearch = useCallback(() => {
    setFormValues(prev => ({ ...prev, search: '' }));
    setQueryParam("search", null);
    
    // Call optional callback if provided
    if (onSearch) {
      onSearch('');
    }
  }, [setQueryParam, onSearch]);
  
  return (
    <div className={`table-search ${className || ''}`}>
      <form onSubmit={handleSubmit} className="search-form">
        {/* Search input field */}
        <div className="search-input-container">
          <input
            type="text"
            name="search"
            placeholder={data.placeholder || "Search..."}
            value={formValues.search}
            onChange={handleSearchChange}
            className="search-input"
          />
          {formValues.search && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="clear-search"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
        
        {/* Search button */}
        <button 
          type="submit" 
          className="search-button"
          disabled={data.disableSearch}
        >
          <Search size={16} />
          <span>Search</span>
        </button>
      </form>
      
      {/* Additional filters */}
      {data.filters && data.filters.length > 0 && (
        <div className="search-filters">
          <DynamicForm
            formData={getFormData(data)}
            formButtons={[]}
          />
        </div>
      )}
      
      {/* Custom action buttons */}
      {data.actionButtons && data.actionButtons.length > 0 && (
        <div className="search-actions">
          {data.actionButtons.map(button => (
            <Button
              key={button.label}
              onClick={button.onClick}
              variant={button.variant}
              flat={button.flat}
              className={`action-button ${button.className || ''}`}
              icon={button.icon}
              href={button.href}
            >
              {button.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
```

## Search Configuration Object

```javascript
const searchConfig = {
  placeholder: "Search users...",        // Custom placeholder text
  searchOnChange: false,                 // Enable immediate search on typing
  disableSearch: false,                  // Disable search functionality
  filters: [                            // Additional filter fields
    {
      type: "select",                   // Field type
      name: "department",               // Field name (must be unique)
      options: [                        // Options for select fields
        { label: "All Departments", value: "" },
        { label: "Engineering", value: "engineering" },
        { label: "Marketing", value: "marketing" },
        { label: "Sales", value: "sales" }
      ],
      placeholder: "Department",        // Placeholder text
    }
  ],
  actionButtons: [                      // Custom action buttons
    {
      label: "Add User",                // Button text
      variant: "primary",               // Button style variant
      icon: <PlusCircle />,            // Button icon
      onClick: () => openAddUserModal() // Click handler
    }
  ]
};
```

## Search Modes

### Standard Mode (Default)
- Search is applied when the user clicks the search button or presses Enter
- Best for complex searches or when you want to avoid excessive API calls

### Immediate Mode
- Search is applied as the user types
- Best for small datasets or when you want instant feedback
- Enable with `searchOnChange: true` in the configuration

## Integration Example

```jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useCustomRouter from '../hooks/useCustomRouter';
import TableSearch from './TableSearch';

function UserTable() {
  const router = useCustomRouter();
  const [searchParams] = useSearchParams();
  
  const initialValues = React.useMemo(() => 
    Object.fromEntries(searchParams.entries()),
    [searchParams]
  );
  
  const searchConfig = {
    placeholder: "Search users by name or email...",
    searchOnChange: false,
    filters: [
      {
        type: "select",
        name: "status",
        options: [
          { label: "All Statuses", value: "" },
          { label: "Active", value: "active" },
          { label: "Inactive", value: "inactive" }
        ],
        placeholder: "Status"
      }
    ],
    actionButtons: [
      {
        label: "Add User",
        variant: "primary",
        icon: <PlusCircle />,
        onClick: () => console.log("Add user clicked")
      }
    ]
  };
  
  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
  };
  
  return (
    <div className="user-table">
      <TableSearch
        router={router}
        initialValues={initialValues}
        data={searchConfig}
        searchParams={searchParams}
        onSearch={handleSearch}
        className="user-search"
      />
      {/* Table component would go here */}
    </div>
  );
}
```

## URL Parameter Integration

The search component manages these URL parameters:

| Parameter | Description | Example |
|-----------|-------------|---------|
| `search` | Current search query | `?search=john` |
| Custom filter names | Additional filter criteria | `?department=sales` |

## Accessibility Features

1. **Keyboard Support**: Form is fully navigable and submittable via keyboard
2. **Clear Button**: Provides a way to quickly clear search input
3. **ARIA Labels**: Proper labeling for screen readers
4. **Focus Management**: Proper focus handling on form interaction

## Related Components

- [Table Component](./tableComponent.md)
- [Table Filter](./tableFilter.md)
- [Table Pagination](./tablePagination.md)