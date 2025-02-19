import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import userTableConstants from "./utils/constants";
import UserTableUtils from "./utils";
import "./styles/index.css";
import useHasPermission from "@/lib/hooks/useHasPermission";

const UserTable = ({ setUserDetails, setShow, refreshTable }) => {
    const { hasPermission } = useHasPermission();
    const getTableData = (data) => ({
        rows: UserTableUtils.tableRow(data),
        actionData: UserTableUtils.tableActionData({ data, setShow, setUserDetails, hasPermission }),
        url: userTableConstants.TABLE_API_URL,
        pagination: UserTableUtils.tablePagination(data),
        sorting: userTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: userTableConstants.externalFilters,
        tableHeader: UserTableUtils.tableHeader({ data, setShow, styles, hasPermission }),
        checkbox: true,
        refreshTable: refreshTable || false,
    });

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default UserTable;
