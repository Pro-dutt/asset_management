import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import serversTableConstants from "./utils/constants";
import ServersTableUtils from "./utils";
import "./styles/index.css";
import GridView from "@/components/GridView";
import serverGridConfig from "../grid/config/serverGridConfig";
import useHasPermission from "@/lib/hooks/useHasPermission";

const ServersTable = ({ setServerDetails, setShow, refreshTable }) => {
    const { hasPermission } = useHasPermission();
    const getTableData = (data) => {
        const rows = ServersTableUtils.tableRow(data);
        const actionData = ServersTableUtils.tableActionData({ data, setShow, setServerDetails, hasPermission });
        const gridConfig = serverGridConfig(rows);

        return {
            rows,
            actionData,
            url: serversTableConstants.TABLE_API_URL,
            pagination: ServersTableUtils.tablePagination(data),
            sorting: serversTableConstants.TABLE_SORTING,
            getTableData,
            rowClickHandler: (row) => console.log(row),
            externalFilters: serversTableConstants.externalFilters,
            tableHeader: ServersTableUtils.tableHeader({ data, setShow, styles, hasPermission }),
            checkbox: true,
            refreshTable: refreshTable || false,
            kanbanComponent: () => <GridView data={gridConfig} actionData={actionData} />,
        };
    };

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default ServersTable;
