import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import VirtualMachine from "./modules/virtualMachines";
import Dashboard from "./modules/dashboard";
import WebApplication from "./modules/webApplications";
import NetworkDevice from "./modules/networkDevices";
import Desktops from "./modules/desktops";
import Server from "./modules/server";
import Laptops from "./modules/laptops";
import { ToastContainer } from "react-toastify";
import ProfilePage from "./modules/userProfile";

function App() {
    return (
        <Layout>
            <ToastContainer />
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
                    path="/network-devices"
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
                            <Desktops />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/laptops"
                    element={
                        <React.Suspense fallback={""}>
                            <Laptops />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/servers"
                    element={
                        <React.Suspense fallback={""}>
                            <Server />
                        </React.Suspense>
                    }
                />

                <Route
                    path="/user-profile"
                    element={
                        <React.Suspense fallback={""}>
                            <ProfilePage />
                        </React.Suspense>
                    }
                />
            </Routes>
        </Layout>
    );
}

export default App;
