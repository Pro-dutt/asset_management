import React, { useState } from "react";
import styles from "./index.module.css";
import UserAvatar from "@/components/UserAvatar";
import TableUtils from "@/components/table/utils";
import TableIcon from "@/components/table/utils/icon";
import GlobalUtils from "@/lib/utils";
import endPointsICONS from "../../utils/icons";
import Table from "@/components/table";
import Modal from "@/components/Popup/Popup";
import VirtualMachine from "@/modules/VirtualMachines";
import desktopTableData from "./data";

const EndPointsTable = () => {
    const [show, setShow] = useState({});
    const [desktopDetails, setDesktopDetails] = useState(null);

    const closeModel = () => setShow({ add: false, edit: false, delete: false });

    const externalFilters = {
        title: "Device List",
        filterFields: [
            {
                type: "select",
                name: "deviceStatus",
                grid: 3,
                options: [
                    { label: "In Use", value: "In Use" },
                    { label: "In Storage", value: "In Storage" },
                    { label: "Assigned", value: "Assigned" },
                    { label: "Inactive", value: "Inactive" },
                ],
                placeholder: "Select Device Status",
            },
            {
                type: "select",
                name: "oem",
                grid: 3,
                options: [
                    { label: "Dell", value: "Dell" },
                    { label: "HP", value: "HP" },
                    { label: "Lenovo", value: "Lenovo" },
                    { label: "Apple", value: "Apple" },
                ],
                placeholder: "Select Manufacturer (OEM)",
            },
            {
                type: "select",
                name: "ram",
                grid: 3,
                options: [
                    { label: "8 GB", value: 8 },
                    { label: "16 GB", value: 16 },
                    { label: "32 GB", value: 32 },
                ],
                placeholder: "Select RAM Size",
            },
        ],
        parentPayloadKey: `[search][filters]`,
    };

    const tableHeader = {
        limit: {
            defaultValue: "20",
            limitStart: "10",
            limitEnd: "50",
            multipleOf: "10",
        },
        actionButtons: [
            {
                variant: "primary",
                icon: TableIcon.PLUS,
                label: "Add New Desktop",
                onClick: () => {
                    setShow({ add: true });
                    console.log("user clicked add desktop button");
                },
            },
            {
                variant: "secondary",
                flat: true,
                className: styles.export,
                icon: TableIcon.EXPORT,
                label: "Export",
                onClick: () => console.log("user clicked export button"),
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

    function getTableData(data) {
        return {
            title: "Active Employees List",
            rows: data?.data?.map((item) => {
                const data = {
                    Id: { key: "_id", value: item._id, type: "hidden" },
                    "Asset ID": { key: "Asset ID", value: item["Asset ID"] },
                    "Product Name": { key: "Product Name", value: item["Product Name"] },
                    Model: { key: "Model", value: item.Model },
                    "Serial Number": { key: "Serial Number", value: item["Serial Number"] },
                    Processor: { key: "Processor", value: item["Processor"] },
                    "RAM (GB)": { key: "RAM (GB)", value: item["RAM (GB)"] },
                    "Device Status": { key: "Device Status", value: item["Device Status"] },
                };

                return data;
            }),
            actionData: [
                {
                    name: "Delete",
                    functions: (row) => {
                        console.log(row);
                    },
                    label: "Delete Entry",
                    Id: "Id",
                },
                {
                    name: "View",
                    functions: (row) => {
                        console.log("hg", row["Id"].value);
                    },
                    label: "View  Details",
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
            getTableData: getTableData,
            rowClickHandler: (row) => {
                console.log(row);
            },
            externalFilters,
            tableHeader,
            checkbox: true,
        };
    }

    const tableData = React.useMemo(() => getTableData(desktopTableData), []);

    return (
        <div className={styles.container}>
            {<Table tableData={tableData} />}

            <Modal show={show.add} onClose={closeModel} title={"Add Desktop"} maxWidth={"1600px"}>
                <VirtualMachine data={desktopDetails} />
            </Modal>
            <Modal show={show.edit} onClose={closeModel} title={"Edit User"} maxWidth={"800px"}>
                <VirtualMachine data={desktopDetails} />
            </Modal>
        </div>
    );
};

export default EndPointsTable;
