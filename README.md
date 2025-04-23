# React Frontend Asset Management System

## Overview
Asset Management SOC helps streamline assets. Users land on a **Dashboard** showing asset numbers, classification, and usage information.

## Dashboard Overview
The dashboard contains the following options:
1. **Endpoints**
    - Laptops
    - Desktops
2. **Servers**
3. **Networking Devices**
4. **Virtual Machines**
5. **Web Applications**
6. **Users**
7. **Ports**
8. **Roles**
9. **Permissions**
10. **Configurations**
    - Departments
    - Designations
    - Operating Systems
    - Device Category
    - Device State

## Endpoints & Assets
### Endpoints
1. **Laptops** - Asset type and supportability information
2. **Desktops** - Asset type and supportability information

### Asset Types
1. Servers
2. Networking Devices
3. Virtual Machines
4. Web Applications
5. Ports

## Prerequisites
- Configure `env.development` file to connect to backend

## Installation Procedure
```bash
npm install
```

## Configurations
- Set backend development port: 
(Example: `https://localhost:<backend-port>`)

- Start the development server

```bash
npm run dev
```

## Dependencies
- craco
- axios
- echarts
- filepond
- framer-motion
- lucide-react
- react-dom 
- react-filepond
- react-router
- react-router-dom
- react-scripts
- react-select
- react-toastify
- sweetalert2

### Developer Dependencies

- autoprefixer
- postcss
- tailwindcss

## [Project Structure](./project_structure.md)

### Core Architecture

| Directory    | Purpose                                  | Key Contents                          |
|--------------|------------------------------------------|---------------------------------------|
| `modules/`   | Feature-based business logic             | Device mgmt, User RBAC, Config systems|
| `services/`  | API communication layer                  | HTTP clients, Auth contexts           |
| `components/`| Reusable presentational components       | Data grids, Charts, Alert systems     |

## Docker Configurations

- To start a docker container for the frontend part:
-  Make sure you are in the `am-react-fronted` or the folder which contains your frontend code
```bash
    docker compose build --no-cache
```