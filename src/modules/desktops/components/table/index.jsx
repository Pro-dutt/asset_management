import React, { useState, useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import desktopsTableConstants from "./utils/constants";
import DesktopsTableUtils from "./utils";
import "./styles/index.css";

const DesktopsTable = ({ setDesktopDetails, setShow }) => {
    const getTableData = (data) => ({
        rows: DesktopsTableUtils.tableRow(data),
        actionData: DesktopsTableUtils.tableActionData({ data, setShow, setDesktopDetails }),
        url: desktopsTableConstants.TABLE_API_URL,
        pagination: DesktopsTableUtils.tablePagination(data),
        sorting: desktopsTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: desktopsTableConstants.externalFilters,
        tableHeader: DesktopsTableUtils.tableHeader({ data, setShow, styles }),
        checkbox: true,
    });

    const tableData = useMemo(() => getTableData({}), []);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default DesktopsTable;
