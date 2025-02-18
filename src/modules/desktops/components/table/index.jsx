import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import desktopsTableConstants from "./utils/constants";
import DesktopsTableUtils from "./utils";
import "./styles/index.css";
import GridView from "@/components/GridView";
import desktopGridConfig from "../grid/config/desktopGridConfig";
import { useAuth } from "@/services/context/auth";

const DesktopsTable = ({ setDesktopDetails, setShow, refreshTable }) => {
    const { getCurrentUser } = useAuth();
    const getTableData = (data) => {
        const rows = DesktopsTableUtils.tableRow(data);
        const actionData = DesktopsTableUtils.tableActionData({ data, setShow, setDesktopDetails, getCurrentUser });
        const gridConfig = desktopGridConfig(rows);
        
        return {
            rows,
            actionData,
            url: desktopsTableConstants.TABLE_API_URL,
            pagination: DesktopsTableUtils.tablePagination(data),
            sorting: desktopsTableConstants.TABLE_SORTING,
            getTableData,
            rowClickHandler: (row) => console.log(row),
            externalFilters: desktopsTableConstants.externalFilters,
            tableHeader: DesktopsTableUtils.tableHeader({ data, setShow, styles, getCurrentUser }),
            checkbox: true,
            refreshTable: refreshTable || false,
            kanbanComponent: () => <GridView data={gridConfig} actionData={actionData} />,
        };
    };

    const tableData = useMemo(() => getTableData({}), [refreshTable, getCurrentUser]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default DesktopsTable;
