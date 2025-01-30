import React from "react";
import Table from "@/components/table";
import { mapTableRow } from "../../utils/tableRowMapper";

const DesktopTable = ({ tableData, onDelete, onView, onEdit, onRowClick, externalFilters, tableHeader }) => {
    const formattedTableData = {
        title: "Desktop List",
        rows: tableData?.data?.map(mapTableRow),
        actionData: [
            {
                name: "Delete",
                functions: onDelete,
                label: "Delete Entry",
                Id: "Id",
            },
            {
                name: "View",
                functions: onView,
                label: "View Details",
                Id: "Id",
            },
            {
                name: "Edit",
                functions: onEdit,
                label: "Edit Details",
                Id: "Id",
            },
        ],
        url: "/get-desktop-list",
        pagination: {
            totalPage: tableData.totalPages || "0",
            totalItemCount: tableData.totalDocuments || "0",
        },
        sorting: {
            initialSort: "Asset ID",
            initialSortOrder: "asc",
        },
        rowClickHandler: onRowClick,
        externalFilters,
        tableHeader,
        checkbox: true,
    };

    return <Table tableData={formattedTableData} />;
};

export default DesktopTable;
