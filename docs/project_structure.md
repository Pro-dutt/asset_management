# React Project Directory Structure

## Components
- Contains reusable UI components that are atomic and self-contained
- Typically split into smaller, pure functional components
- Should be as generic and flexible as possible
- Components include:
  - AccessDenied
  - AddAssets
  - Breadcrumb
  - builkUploadForm
  - CanAccess
  - Card
  - CircularProgressBar
  - DataNotFound
  - details
  - DropDown
  - eCharts
  - ErrorText
  - form
  - GridView
  - Heading
  - Loader
  - NameAvatar
  - Notification
  - Pageaccessdenied
  - Pagenotfound
  - Popup
  - sampleTableCall
  - SuccessText
  - tab
  - table
  - UserAvatar

- These components are designed to be used across multiple pages or features

## Layout
- Manages the overall structure and composition of pages
- Contains components that define the general page layout
- Handles common page elements like:
  - Navbar
  - Sidebar
- Ensures consistent navigation and page structure across the application
- Helps maintain a uniform look and feel

## Lib (Library)
- Stores utility functions, helper classes, and shared logic
- Contains non-UI related code that can be used across the entire application
- Includes:
  - routes
  - High Order Components (hoc)
  - Custom hooks
  - State management utilities
- Promotes code reusability and keeps business logic separate from UI components

## Modules
- Represents larger, feature-specific sections of the application
- Typically contains more complex, domain-specific components and logic
- Grouped by business domain or feature set
- Incude:
  - auth
  - dashboard
  - department
  - desktops
  - deviceCategory
  - deviceState
  - laptops
  - networkDevices
  - operatingSystem
  - permission
  - role
  - routes
  - server
  - tenant
  - user
  - userProfile
  - virtualMachines
  - webApplications
- Helps organize larger applications by separating concerns and improving maintainability

## Services
- Centralized state management
- Reusable logic through hooks
- Consistent API interaction
- Easy-to-understand utility functions
- Include:
  - [api](./api.md)
  - [context](./context.md) 
  - hooks
  - utils