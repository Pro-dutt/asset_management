import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import roleTableConstants from "./utils/constants";
import RolesTableUtils from "./utils";
import "./styles/index.css";
import useHasPermission from "@/lib/hooks/useHasPermission";

const RolesTable = ({ setRoleDetails, setShow, refreshTable }) => {
    const { hasPermission } = useHasPermission();
    const getTableData = (data) => ({
        rows: RolesTableUtils.tableRow(data),
        actionData: RolesTableUtils.tableActionData({ data, setShow, setRoleDetails, hasPermission }),
        url: roleTableConstants.TABLE_API_URL,
        pagination: RolesTableUtils.tablePagination(data),
        sorting: roleTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: roleTableConstants.externalFilters,
        tableHeader: RolesTableUtils.tableHeader({ data, setShow, styles, hasPermission }),
        checkbox: true,
        refreshTable: refreshTable || false,
    });

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default RolesTable;
