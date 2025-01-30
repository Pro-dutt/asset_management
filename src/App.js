import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import VirtualMachine from "./modules/VirtualMachines";
import EndPointsTable from "./modules/endPoints/components/table";

function App() {
    return (
        <Layout>
            <Routes>
                <Route
                    path="/virtual-machines"
                    element={
                        <React.Suspense fallback={""}>
                            <VirtualMachine />
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
            </Routes>
        </Layout>
    );
}

export default App;
