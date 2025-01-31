import React, { useState, useMemo, useCallback } from "react";
import styles from "./styles/index.module.css";
import TableUtils from "@/components/table/utils";
import TableIcon from "@/components/table/utils/icon";
import Table from "@/components/table";
import Modal from "@/components/Popup/Popup";
import VirtualMachine from "@/modules/VirtualMachines";
import GlobalICONS from "@/lib/utils/icons";
import "./styles/index.css";
import desktopsTableConstants from "./utils/constants";

const EndPointsTable = () => {
    const [show, setShow] = useState({});
    const [desktopDetails, setDesktopDetails] = useState(null);

    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const tableHeader = (data) => {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["productName", "serialNumber", "serviceTag"]);
        return {
            limit: desktopsTableConstants.TABLE_LIMITS,
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
                        initialData: autoSuggestionData,
                        autoSuggestionUrl: "/api/suggestions",
                        minChars: 1,
                        maxSuggestions: 5,
                    },
                    className: styles.search_field,
                },
            ],
        };
    };

    const getTableData = (data) => ({
        rows: data?.data?.map((item) => ({
            id: { key: "id", value: item._id, type: "hidden" },
            "Asset Id": { key: "assetId", value: item.assetId },
            "Product Name": { key: "productName", value: item.productName },
            Model: { key: "model", value: item.model },
            "Serial Number": { key: "serialNumber", value: item.serialNumber },
            Processor: { key: "processor", value: item.processor },
            "Ram [Gb]": { key: "ramGb", value: item.ramGb },
            "Device Status": { key: "deviceStatus", value: item.deviceStatus },
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
        url: desktopsTableConstants.TABLE_API_URL,
        pagination: {
            totalPage: data.totalPages || "0",
            totalItemCount: data.totalDocuments || "0",
        },
        sorting: desktopsTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: desktopsTableConstants.externalFilters,
        tableHeader: tableHeader(data),
        checkbox: true,
    });

    const tableData = useMemo(() => getTableData({}), []);

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
