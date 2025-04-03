import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import routesTableConstants from "./utils/constants";
import RoutesTableUtils from "./utils";
import "./styles/index.css";

const RoutesTable = ({}) => {
    const getTableData = (data) => ({
        rows: RoutesTableUtils.tableRow(data),
        url: routesTableConstants.TABLE_API_URL,
        pagination: RoutesTableUtils.tablePagination(data),
        sorting: routesTableConstants.TABLE_SORTING,
        getTableData,
        externalFilters: routesTableConstants.externalFilters,
        tableHeader: RoutesTableUtils.tableHeader({ data, styles }),
        checkbox: true,
    });

    const tableData = useMemo(() => getTableData({}), []);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default RoutesTable;
