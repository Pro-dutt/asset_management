import React, { useState } from "react";
import desktopTableSampleData from "./assets/data/desktopTableSampleData";
import { useTableConfiguration } from "./hooks/useTableConfiguration";
import DesktopTable from "./components/desktopTable";
import DesktopModal from "./components/desktopModel";

const Endpoints = () => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        type: null,
        desktopDetails: null,
    });

    const closeModal = () =>
        setModalState({
            isOpen: false,
            type: null,
            desktopDetails: null,
        });

    const handleAddDesktop = () =>
        setModalState({
            isOpen: true,
            type: "add",
            desktopDetails: null,
        });

    const handleExport = () => console.log("Exporting data...");

    const handleEdit = (row) => {
        const details = desktopTableSampleData?.data?.find((item) => row["Id"].value === item._id);
        setModalState({
            isOpen: true,
            type: "edit",
            desktopDetails: details,
        });
    };

    const { externalFilters, tableHeader } = useTableConfiguration({
        onAddDesktop: handleAddDesktop,
        onExport: handleExport,
        tableData: desktopTableSampleData,
    });

    return (
        <div className="endpoints-table-container">
            <DesktopTable
                tableData={desktopTableSampleData}
                onDelete={(row) => console.log(row)}
                onView={(row) => console.log("Viewing details of", row["Id"].value)}
                onEdit={handleEdit}
                onRowClick={(row) => console.log(row)}
                externalFilters={externalFilters}
                tableHeader={tableHeader}
            />

            <DesktopModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                title={modalState.type === "add" ? "Add Desktop" : "Edit Desktop"}
                desktopDetails={modalState.desktopDetails}
                maxWidth={modalState.type === "add" ? "1600px" : "800px"}
            />
        </div>
    );
};

export default Endpoints;
