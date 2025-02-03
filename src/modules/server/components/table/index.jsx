import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import serversTableConstants from "./utils/constants";
import ServersTableUtils from "./utils";
import "./styles/index.css";

const ServersTable = ({ setServerDetails, setShow }) => {
    const getTableData = (data) => ({
        rows: ServersTableUtils.tableRow(data),
        actionData: ServersTableUtils.tableActionData({ data, setShow, setServerDetails }),
        url: serversTableConstants.TABLE_API_URL,
        pagination: ServersTableUtils.tablePagination(data),
        sorting: serversTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: serversTableConstants.externalFilters,
        tableHeader: ServersTableUtils.tableHeader({ data, setShow, styles }),
        checkbox: true,
    });

    const tableData = useMemo(() => getTableData({}), []);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default ServersTable;
