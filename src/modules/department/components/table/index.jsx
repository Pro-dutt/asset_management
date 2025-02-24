import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import departmentTableConstants from "./utils/constants";
import DepartmentsTableUtils from "./utils";
import "./styles/index.css";
import useHasPermission from "@/lib/hooks/useHasPermission";

const DepartmentsTable = ({ setDepartmentDetails, setShow, refreshTable }) => {
    const { hasPermission } = useHasPermission();
    const getTableData = (data) => ({
        rows: DepartmentsTableUtils.tableRow(data),
        actionData: DepartmentsTableUtils.tableActionData({ data, setShow, setDepartmentDetails, hasPermission }),
        url: departmentTableConstants.TABLE_API_URL,
        pagination: DepartmentsTableUtils.tablePagination(data),
        sorting: departmentTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: departmentTableConstants.externalFilters,
        tableHeader: DepartmentsTableUtils.tableHeader({ data, setShow, styles, hasPermission }),
        checkbox: true,
        refreshTable: refreshTable || false,
    });

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default DepartmentsTable;
