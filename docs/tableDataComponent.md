# Table Data Structure

## Overview
The table component requires data to be transformed into a specific structure before rendering. The `getTableData` function handles this transformation, converting raw API data into the format expected by the table component.

## Data Transformation Flow
```
Raw API Data → getTableData() → Formatted Table Data → Table Component
```

## Data Structure Specification

### Root Object Properties
```javascript
{
  title: "Users Table",                 // Table title displayed in UI
  url: "/api/users",                    // API endpoint for data fetching
  pagination: {                         // Pagination configuration
    page: 1,
    limit: 10,
    totalItems: 100,
    totalPages: 10
  },
  sorting: {                           // Default sorting configuration
    enabled: true,
    defaultSort: "name",
    defaultOrder: "asc"
  },
  rows: [...],                         // Array of row objects (detailed below)
  actionData: [...],                   // Array of action configurations
  onRowClick: (row) => {...},          // Row click handler function
  externalFilters: {...},              // Filter configuration
  header: {...}                        // Header configuration
}
```

### Row Object Structure
Each item in the `rows` array contains key-value pairs representing columns:

```javascript
{
  "_id": {
    key: "_id",
    value: "60d21b4667d0d8992e610c85",
    type: "hidden"                    // Hidden columns won't display in UI
  },
  "name": {
    key: "name",
    value: <UserAvatar user={userData} />,  // Can be React component
    originalValue: "John Smith",            // Raw value for sorting/filtering
    suggestionValue: "John Smith"           // Value for autocomplete/search
  },
  "role": {
    key: "role",
    value: <RoleBadge role="admin" />       // Custom component
  },
  "plan": {
    key: "plan",
    value: "Enterprise"                     // Plain text value
  },
  "billing": {
    key: "billing",
    value: <span className="billing-badge">Monthly</span>
  },
  "status": {
    key: "status",
    value: <StatusIndicator status="active" />
  }
}
```

### Action Configuration
The `actionData` array defines operations available for each row:

```javascript
[
  {
    label: "View",
    icon: <ViewIcon />,
    handler: (row) => navigateToDetail(row._id.value)
  },
  {
    label: "Edit", 
    icon: <EditIcon />,
    handler: (row) => openEditModal(row)
  },
  {
    label: "Delete",
    icon: <DeleteIcon />,
    handler: (row) => confirmDelete(row._id.value),
    variant: "danger"
  }
]
```

## Implementation Example

```javascript
// Example raw data from API
const rawData = {
  data: [
    {
      _id: "60d21b4667d0d8992e610c85",
      name: "john smith",
      role: "admin",
      plan: "enterprise",
      billing: "monthly",
      status: "active"
    },
    // More user records...
  ],
  pagination: {
    page: 1,
    limit: 10,
    totalItems: 100,
    totalPages: 10
  }
};

// Transform raw data for table component
const tableData = getTableData({
  title: "Users Management",
  data: rawData,
  actionConfig: [
    {
      label: "View",
      handler: (id) => navigate(`/users/${id}`)
    },
    {
      label: "Edit",
      handler: (id) => navigate(`/users/edit/${id}`)
    }
  ]
});

// Result will have the structure expected by the table component
```

## Field Configuration Options

Each field (column) can have these properties:

| Property | Type | Description |
|----------|------|-------------|
| `key` | String | Field identifier matching data source |
| `value` | Any | Display value (text, component, etc.) |
| `type` | String | Field type (e.g., "hidden", "text", "action") |
| `originalValue` | Any | Raw value for sorting/filtering operations |
| `suggestionValue` | String | Value for search/autocomplete features |
| `sortable` | Boolean | Whether column can be sorted |
| `filterable` | Boolean | Whether column can be filtered |

## Best Practices
1. **Consistent Keys**: Ensure field keys match across all data objects
2. **Component Optimization**: Keep component values lightweight to prevent rendering issues
3. **Hidden Fields**: Use `type: "hidden"` for ID fields and other data not meant for display
4. **originalValue**: Always provide this for fields with component values to enable sorting