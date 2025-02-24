import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import designationTableConstants from "./utils/constants";
import DesignationsTableUtils from "./utils";
import "./styles/index.css";
import useHasPermission from "@/lib/hooks/useHasPermission";

const DesignationsTable = ({ setDesignationDetails, setShow, refreshTable }) => {
    const { hasPermission } = useHasPermission();
    const getTableData = (data) => ({
        rows: DesignationsTableUtils.tableRow(data),
        actionData: DesignationsTableUtils.tableActionData({ data, setShow, setDesignationDetails, hasPermission }),
        url: designationTableConstants.TABLE_API_URL,
        pagination: DesignationsTableUtils.tablePagination(data),
        sorting: designationTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: designationTableConstants.externalFilters,
        tableHeader: DesignationsTableUtils.tableHeader({ data, setShow, styles, hasPermission }),
        checkbox: true,
        refreshTable: refreshTable || false,
    });

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default DesignationsTable;
