import React, { useState, useMemo } from "react";
import styles from "./index.module.css";
import TableUtils from "@/components/table/utils";
import TableIcon from "@/components/table/utils/icon";
import Table from "@/components/table";
import Modal from "@/components/Popup/Popup";
import VirtualMachine from "@/modules/virtualMachines";
import GlobalICONS from "@/lib/utils/icons";
import desktopTableData from "./data";

const FILTER_OPTIONS = {
    deviceStatus: ["In Use", "In Storage", "Assigned", "Inactive"],
    oem: ["Dell", "HP", "Lenovo", "Apple"],
    ram: ["8", "16", "32"],
};

const TABLE_LIMITS = {
    defaultValue: "20",
    limitStart: "10",
    limitEnd: "50",
    multipleOf: "10",
};

const EndPointsTable = () => {
    const [show, setShow] = useState({});
    const [desktopDetails, setDesktopDetails] = useState(null);

    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const externalFilters = {
        title: "Device List",
        filterFields: Object.keys(FILTER_OPTIONS).map((key) => ({
            type: "select",
            name: key,
            grid: 3,
            options: FILTER_OPTIONS[key].map((value) => ({ label: value, value })),
            placeholder: `Select ${key.replace(/([A-Z])/g, " $1").trim()}`,
        })),
        parentPayloadKey: `[search][filters]`,
    };

    const tableHeader = {
        limit: TABLE_LIMITS,
        actionButtons: [
            {
                variant: "primary",
                icon: TableIcon.PLUS,
                label: "Add New Desktop",
                onClick: () => setShow({ add: true }),
            },
            {
                variant: "secondary",
                flat: true,
                className: styles.export,
                icon: TableIcon.EXPORT,
                label: "Export",
                onClick: () => console.log("Exporting data..."),
            },
        ],
        filters: [
            {
                type: "text",
                name: "searchText",
                grid: 2,
                placeholder: "Search desktop",
                autoSuggestion: {
                    initialData: TableUtils.formatDataForAutoSuggestion(desktopTableData.data, ["Product Name", "Serial Number", "Service Tag"]),
                    autoSuggestionUrl: "/api/suggestions",
                    minChars: 1,
                    maxSuggestions: 5,
                },
                className: styles.search_field,
            },
        ],
    };

    const getTableData = (data) => ({
        title: "Active Employees List",
        rows: data?.data?.map((item) => ({
            Id: { key: "_id", value: item._id, type: "hidden" },
            "Asset ID": { key: "Asset ID", value: item["Asset ID"] },
            "Product Name": { key: "Product Name", value: item["Product Name"] },
            Model: { key: "Model", value: item.Model },
            "Serial Number": { key: "Serial Number", value: item["Serial Number"] },
            Processor: { key: "Processor", value: item["Processor"] },
            "RAM (GB)": { key: "RAM (GB)", value: item["RAM (GB)"] },
            "Device Status": { key: "Device Status", value: item["Device Status"] },
        })),
        actionData: [
            {
                name: "Delete",
                functions: (row) => console.log(row),
                label: "Delete Entry",
                Id: "Id",
            },
            {
                name: "View",
                functions: (row) => console.log("Viewing details of", row["Id"].value),
                label: "View Details",
                Id: "Id",
            },
            {
                name: "Edit",
                functions: (row) => {
                    setDesktopDetails(data?.data?.find((item) => row["Id"].value === item._id));
                    setShow({ edit: true, add: false, remove: false });
                },
                label: "Edit Details",
                Id: "Id",
            },
        ],
        url: `/get-desktop-list`,
        pagination: {
            totalPage: data.totalPages || "0",
            totalItemCount: data.totalDocuments || "0",
        },
        sorting: {
            initialSort: "Asset ID",
            initialSortOrder: "asc",
        },
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters,
        tableHeader,
        checkbox: true,
    });

    const tableData = useMemo(() => getTableData(desktopTableData), []);

    return (
        <div className={styles.container}>
            {<Table tableData={tableData} />}

            <Modal
                show={show.add}
                onClose={() => setShow({})}
                title={"Add Desktop"}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new desktop"
            >
                <VirtualMachine />
            </Modal>
            <Modal show={show.edit} onClose={closeModal} title="Edit User" maxWidth="800px">
                <VirtualMachine data={desktopDetails} />
            </Modal>
        </div>
    );
};

export default EndPointsTable;
