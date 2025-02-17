import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import webApplicationsTableConstants from "./utils/constants";
import WebApplicationsTableUtils from "./utils";
import "./styles/index.css";
import GridView from "@/components/GridView";
import webApplicationsGridConfig from "../grid/config/webApplicationsGridConfig";

const WebApplicationsTable = ({ setWebApplicationDetails, setShow, refreshTable }) => {
    const getTableData = (data) => {
        const rows = WebApplicationsTableUtils.tableRow(data);
        const actionData = WebApplicationsTableUtils.tableActionData({ data, setShow, setWebApplicationDetails });
        const gridConfig = webApplicationsGridConfig(rows);

        return {
            rows,
            actionData,
            url: webApplicationsTableConstants.TABLE_API_URL,
            pagination: WebApplicationsTableUtils.tablePagination(data),
            sorting: webApplicationsTableConstants.TABLE_SORTING,
            getTableData,
            rowClickHandler: (row) => console.log(row),
            externalFilters: webApplicationsTableConstants.externalFilters,
            tableHeader: WebApplicationsTableUtils.tableHeader({ data, setShow, styles }),
            checkbox: true,
            refreshTable: refreshTable || false,
            kanbanComponent: () => <GridView data={gridConfig} actionData={actionData} />,
        };
    };

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default WebApplicationsTable;
