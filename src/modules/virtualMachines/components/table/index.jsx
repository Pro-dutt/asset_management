import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import virtualMachinesTableConstants from "./utils/constants";
import VirtualMachinesTableUtils from "./utils";
import "./styles/index.css";

const VirtualMachinesTable = ({ setVirtualMachineDetails, setShow, refreshTable }) => {
    const getTableData = (data) => ({
        rows: VirtualMachinesTableUtils.tableRow(data),
        actionData: VirtualMachinesTableUtils.tableActionData({ data, setShow, setVirtualMachineDetails }),
        url: virtualMachinesTableConstants.TABLE_API_URL,
        pagination: VirtualMachinesTableUtils.tablePagination(data),
        sorting: virtualMachinesTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: virtualMachinesTableConstants.externalFilters,
        tableHeader: VirtualMachinesTableUtils.tableHeader({ data, setShow, styles }),
        checkbox: true,
        refreshTable: refreshTable || false,
    });

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default VirtualMachinesTable;
