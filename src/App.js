import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import VirtualMachine from "./modules/virtualMachines";
import EndPointsTable from "./modules/endPoints/components/table";
import Dashboard from "./modules/dashboard";
import Endpoints from "./modules/endPoints";
import WebApplication from "./modules/webApplications";
import NetworkDevice from "./modules/networkDevices";

function App() {
    return (
        <Layout>
            <Routes>
                <Route
                    path="/"
                    element={
                        <React.Suspense fallback={""}>
                            <Dashboard />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/virtual-machines"
                    element={
                        <React.Suspense fallback={""}>
                            <VirtualMachine />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/web-applications"
                    element={
                        <React.Suspense fallback={""}>
                            <WebApplication />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/networking-devices"
                    element={
                        <React.Suspense fallback={""}>
                            <NetworkDevice />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/desktops"
                    element={
                        <React.Suspense fallback={""}>
                            <EndPointsTable />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/endpoints"
                    element={
                        <React.Suspense fallback={""}>
                            <Endpoints />
                        </React.Suspense>
                    }
                />
            </Routes>
        </Layout>
    );
}

export default App;
