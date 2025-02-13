import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import virtualMachinesTableConstants from "./utils/constants";
import VirtualMachinesTableUtils from "./utils";
import "./styles/index.css";
import GridView from "@/components/GridView";
import virtualMachinesGridConfig from "../../grid/config/virtualMachinesGridConfig";

const VirtualMachinesTable = ({ setVirtualMachineDetails, setShow, refreshTable }) => {
    const getTableData = (data) => {
        const rows = VirtualMachinesTableUtils.tableRow(data);
        const actionData = VirtualMachinesTableUtils.tableActionData({ data, setShow, setVirtualMachineDetails });
        const gridConfig = virtualMachinesGridConfig(rows);

        return {
            rows,
            actionData,
            url: virtualMachinesTableConstants.TABLE_API_URL,
            pagination: VirtualMachinesTableUtils.tablePagination(data),
            sorting: virtualMachinesTableConstants.TABLE_SORTING,
            getTableData,
            rowClickHandler: (row) => console.log(row),
            externalFilters: virtualMachinesTableConstants.externalFilters,
            tableHeader: VirtualMachinesTableUtils.tableHeader({ data, setShow, styles }),
            checkbox: true,
            refreshTable: refreshTable || false,
            kanbanComponent: () => <GridView data={gridConfig} actionData={actionData} />,
        };
    };

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default VirtualMachinesTable;
