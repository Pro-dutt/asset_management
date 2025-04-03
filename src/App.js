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
import AccessDenied from "./components/CanAccess";
import Department from "./modules/department";
import Designation from "./modules/designation";
import OperatingSystem from "./modules/operatingSystem";
import DeviceCategory from "./modules/deviceCategory";
import DeviceState from "./modules/deviceState";
import Pagenotfound from "./components/Pagenotfound";
import Pageaccessdenied from "./components/Pageaccessdenied";

function App() {
    return (
        <>
            <ToastContainer />
            <Routes>
                {/* Auth Module with its own layout */}
              <Route path="/auth/*" element={<Auth />} />

             {/*  <Route path="/page-not-found" element={<Pagenotfound/>} />
              <Route path="/page-access-denied" element={<Pageaccessdenied/>} />*/}

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
                                <Route
                                    path="/departments"
                                    element={
                                        <React.Suspense fallback={""}>
                                            <Department />
                                        </React.Suspense>
                                    }
                                />
                                <Route
                                    path="/designations"
                                    element={
                                        <React.Suspense fallback={""}>
                                            <Designation />
                                        </React.Suspense>
                                    }
                                />
                                <Route
                                    path="/operating-systems"
                                    element={
                                        <React.Suspense fallback={""}>
                                            <OperatingSystem />
                                        </React.Suspense>
                                    }
                                />
                                <Route
                                    path="/device-category"
                                    element={
                                        <React.Suspense fallback={""}>
                                            <DeviceCategory />
                                        </React.Suspense>
                                    }
                                />
                                <Route
                                    path="/device-state"
                                    element={
                                        <React.Suspense fallback={""}>
                                            <DeviceState />
                                        </React.Suspense>
                                    }
                                />
                            </Routes>
                        </Layout>
                    }
                /> 

                <Route path="/access-denied" element={<AccessDenied />} />
            </Routes>
        </>
    );
}

export default App;
