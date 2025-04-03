import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import "./styles/index.css";
import TenantTableUtils from "./utils";
import tenantTableConstants from "./utils/constants";
import sampleTenantTableData from "./utils/seeds";

const TenantTable = ({ setTenantDetails, setShow, refreshTable }) => {
    const getTableData = (data) => ({
        rows: TenantTableUtils.tableRow(data),
        actionData: TenantTableUtils.tableActionData({ data, setShow, setTenantDetails }),
        url: tenantTableConstants.TABLE_API_URL,
        pagination: TenantTableUtils.tablePagination(data),
        sorting: tenantTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: tenantTableConstants.externalFilters,
        tableHeader: TenantTableUtils.tableHeader({ data, setShow, styles }),
        checkbox: true,
        refreshTable: refreshTable || false,
    });

    const tableData = useMemo(() => getTableData(sampleTenantTableData), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default TenantTable;
