import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import deviceCategoryTableConstants from "./utils/constants";
import DeviceCategoryTableUtils from "./utils";
import "./styles/index.css";
import useHasPermission from "@/lib/hooks/useHasPermission";

const DeviceCategoryTable = ({ setDeviceCategoryDetails, setShow, refreshTable }) => {
    const { hasPermission } = useHasPermission();
    const getTableData = (data) => ({
        rows: DeviceCategoryTableUtils.tableRow(data),
        actionData: DeviceCategoryTableUtils.tableActionData({ data, setShow, setDeviceCategoryDetails, hasPermission }),
        url: deviceCategoryTableConstants.TABLE_API_URL,
        pagination: DeviceCategoryTableUtils.tablePagination(data),
        sorting: deviceCategoryTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: deviceCategoryTableConstants.externalFilters,
        tableHeader: DeviceCategoryTableUtils.tableHeader({ data, setShow, styles, hasPermission }),
        checkbox: true,
        refreshTable: refreshTable || false,
    });

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default DeviceCategoryTable;
