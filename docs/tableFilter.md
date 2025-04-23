# Table Filter Component

## Overview
The `TableFilter` component provides a flexible filtering interface for data tables, enabling users to narrow down displayed records based on multiple criteria. It supports both immediate filtering and submit-based filtering modes, with a collapsible UI for space efficiency.

## Visual Example
```
┌─────────────────────────────────────────────────────────┐
│ Users Filters                                 [Collapse]│
├─────────────────────────────────────────────────────────┤
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│ │ Role      ▼ │ │ Plan      ▼ │ │ Status           ▼  │ │
│ └─────────────┘ └─────────────┘ └─────────────────────┘ │
│                                                         │
│ [Apply Filters]                             [Clear All] │
└─────────────────────────────────────────────────────────┘
```

## Props API

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `router` | Object | Yes | - | Router object with navigation methods |
| `initialValues` | Object | Yes | - | Initial filter values from URL |
| `data` | Object | Yes | - | Filter configuration object |
| `searchParams` | URLSearchParams | Yes | - | Current URL search parameters |
| `onFilterChange` | Function | No | null | Callback for filter changes |
| `className` | String | No | "" | Additional CSS classes |

## Filter Configuration Object

```javascript
const filterConfig = {
  title: "Users Filters",              // Title displayed in filter panel
  filterOnSubmit: true,                // When true, filters apply only on submit
  filterFields: [                      // Array of filter field definitions
    {
      type: "select",                  // Field type
      name: "role",                    // Field name (must be unique)
      grid: 3,                         // Grid column width (out of 12)
      options: [                       // Options for select fields
        { label: "All", value: "" },
        { label: "Admin", value: "admin" },
        { label: "Author", value: "author" },
        { label: "Editor", value: "editor" }
      ],
      placeholder: "Select Role",      // Placeholder text
      required: false,                 // Whether field is required
      clearable: true                  // Whether field can be cleared
    },
    // More filter fields...
  ],
  filterActionButtons: [               // Custom action buttons
    {
      label: "Apply",                  // Button text
      type: "submit",                  // Button type
      variant: "primary",              // Button style variant
    },
    {
      label: "Clear",
      type: "reset",
      variant: "secondary",
    }
  ],
};
```

## Supported Filter Field Types

| Type | Description | Additional Properties |
|------|-------------|----------------------|
| `select` | Dropdown selection | `options`, `multiple`, `clearable` |
| `input` | Text input field | `minLength`, `maxLength`, `pattern` |
| `date` | Date picker | `minDate`, `maxDate`, `format` |
| `range` | Numeric range | `min`, `max`, `step` |
| `checkbox` | Boolean toggle | `label`, `checkedValue`, `uncheckedValue` |
| `radio` | Option selection | `options` (similar to select) |

## Filter Modes

### Immediate Mode (Default)
- Changes to filter values immediately update the URL and trigger filtering
- Best for simple filters or when you want instant feedback
- Example usage:

```javascript
const immediateFilterConfig = {
  title: "Quick Filters",
  filterOnSubmit: false,  // or omit, as false is default
  filterFields: [
    // Field definitions...
  ]
};
```

### Submit Mode
- Filter changes are only applied when the user clicks an action button
- Provides apply and clear buttons by default
- Useful for complex filtering where you want to set multiple filters before applying
- Example usage:

```javascript
const submitFilterConfig = {
  title: "Advanced Filters",
  filterOnSubmit: true,
  filterFields: [
    // Field definitions...
  ],
  filterActionButtons: [
    {
      label: "Apply Filters",
      type: "submit",
      variant: "primary"
    },
    {
      label: "Reset",
      type: "reset",
      variant: "secondary"
    }
  ]
};
```

## Complete Implementation Example

```jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useCustomRouter from '../hooks/useCustomRouter';
import TableFilter from '../components/TableFilter';

function UserTable() {
  const [searchParams] = useSearchParams();
  const router = useCustomRouter();
  
  const initialValues = React.useMemo(() => 
    Object.fromEntries(searchParams.entries()),
    [searchParams]
  );
  
  const filterConfig = {
    title: "User Filters",
    filterOnSubmit: true,
    filterFields: [
      {
        type: "select",
        name: "role",
        grid: 4,
        options: [
          { label: "All Roles", value: "" },
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" },
          { label: "Guest", value: "guest" }
        ],
        placeholder: "Filter by role"
      },
      {
        type: "select",
        name: "status",
        grid: 4,
        options: [
          { label: "All Statuses", value: "" },
          { label: "Active", value: "active" },
          { label: "Inactive", value: "inactive" },
          { label: "Pending", value: "pending" }
        ],
        placeholder: "Filter by status"
      }
    ]
  };
  
  return (
    <div className="user-table">
      <TableFilter
        router={router}
        initialValues={initialValues}
        data={filterConfig}
        searchParams={searchParams}
      />
      {/* Table component would go here */}
    </div>
  );
}
```

## Performance Considerations

1. **Memoization**: Filter fields are memoized to prevent unnecessary re-renders
2. **Debouncing**: For immediate mode, filter changes can be debounced to prevent excessive API calls
3. **URL Parameter Management**: Only non-empty filter values are added to URL parameters

## Accessibility Features

1. **Keyboard Navigation**: All filter fields are fully keyboard accessible
2. **Screen Reader Support**: Proper ARIA labels on all interactive elements
3. **Focus Management**: Focus is properly maintained when toggling filter visibility

## Related Components

- [Table Component](./tableComponent.md)
- [Table Search](./tableSearch.md)
- [Table Pagination](./tablePagination.md)