import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./layout";
import VirtualMachine from "./modules/virtualMachines";
import Dashboard from "./modules/dashboard";
import WebApplication from "./modules/webApplications";
import NetworkDevice from "./modules/networkDevices";
import Desktops from "./modules/desktops";
import Server from "./modules/server";
import Laptops from "./modules/laptops";
import ProfilePage from "./modules/userProfile";
import ApiRoutes from "./modules/routes";
import Permission from "./modules/permission";
import Role from "./modules/role";
import User from "./modules/user";
import Auth from "./modules/auth";
import Tenant from "./modules/tenant";

function App() {
    return (
        <>
            <ToastContainer />
            <Routes>
                {/* Auth Module with its own layout */}
                <Route path="/auth/*" element={<Auth />} />

                {/* Main App Layout */}
                <Route
                    path="/*"
                    element={
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
                                <Route
                                    path="/routes"
                                    element={
                                        <React.Suspense fallback={""}>
                                            <ApiRoutes />
                                        </React.Suspense>
                                    }
                                />
                                <Route
                                    path="/permissions"
                                    element={
                                        <React.Suspense fallback={""}>
                                            <Permission />
                                        </React.Suspense>
                                    }
                                />
                                <Route
                                    path="/roles"
                                    element={
                                        <React.Suspense fallback={""}>
                                            <Role />
                                        </React.Suspense>
                                    }
                                />
                                <Route
                                    path="/users"
                                    element={
                                        <React.Suspense fallback={""}>
                                            <User />
                                        </React.Suspense>
                                    }
                                />
                                <Route
                                    path="/tenant"
                                    element={
                                        <React.Suspense fallback={""}>
                                            <Tenant />
                                        </React.Suspense>
                                    }
                                />
                            </Routes>
                        </Layout>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
