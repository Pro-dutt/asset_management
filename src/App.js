import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import VirtualMachine from "./modules/VirtualMachines";

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
            </Routes>
        </Layout>
    );
}

export default App;
