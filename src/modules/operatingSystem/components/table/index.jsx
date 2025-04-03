import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import operatingSystemTableConstants from "./utils/constants";
import OperatingSystemsTableUtils from "./utils";
import "./styles/index.css";
import useHasPermission from "@/lib/hooks/useHasPermission";

const OperatingSystemsTable = ({ setOperatingSystemDetails, setShow, refreshTable }) => {
    const { hasPermission } = useHasPermission();
    const getTableData = (data) => ({
        rows: OperatingSystemsTableUtils.tableRow(data),
        actionData: OperatingSystemsTableUtils.tableActionData({ data, setShow, setOperatingSystemDetails, hasPermission }),
        url: operatingSystemTableConstants.TABLE_API_URL,
        pagination: OperatingSystemsTableUtils.tablePagination(data),
        sorting: operatingSystemTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: operatingSystemTableConstants.externalFilters,
        tableHeader: OperatingSystemsTableUtils.tableHeader({ data, setShow, styles, hasPermission }),
        checkbox: true,
        refreshTable: refreshTable || false,
    });

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default OperatingSystemsTable;
