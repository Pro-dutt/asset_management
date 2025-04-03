import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import permissionsTableConstants from "./utils/constants";
import PermissionsTableUtils from "./utils";
import "./styles/index.css";
import useHasPermission from "@/lib/hooks/useHasPermission";

const PermissionsTable = ({ setPermissionDetails, setShow, refreshTable }) => {
    const { hasPermission } = useHasPermission();
    const getTableData = (data) => ({
        rows: PermissionsTableUtils.tableRow(data),
        actionData: PermissionsTableUtils.tableActionData({ data, setShow, setPermissionDetails, hasPermission }),
        url: permissionsTableConstants.TABLE_API_URL,
        pagination: PermissionsTableUtils.tablePagination(data),
        sorting: permissionsTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: permissionsTableConstants.externalFilters,
        tableHeader: PermissionsTableUtils.tableHeader({ data, setShow, styles, hasPermission }),
        checkbox: true,
        refreshTable: refreshTable || false,
    });

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default PermissionsTable;
