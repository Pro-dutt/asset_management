import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import networkingDevicesTableConstants from "./utils/constants";
import NetworkingDevicesTableUtils from "./utils";
import "./styles/index.css";
import networkDevicesGridConfig from "../../grid/config/desktopGridConfig";
import GridView from "@/components/GridView";

const NetworkingDevicesTable = ({ setNetworkingDeviceDetails, setShow, refreshTable }) => {
    const getTableData = (data) => {
        const rows = NetworkingDevicesTableUtils.tableRow(data);
        const actionData = NetworkingDevicesTableUtils.tableActionData({ data, setShow, setNetworkingDeviceDetails });
        const gridConfig = networkDevicesGridConfig(rows);

        return {
            rows,
            actionData,
            url: networkingDevicesTableConstants.TABLE_API_URL,
            pagination: NetworkingDevicesTableUtils.tablePagination(data),
            sorting: networkingDevicesTableConstants.TABLE_SORTING,
            getTableData,
            rowClickHandler: (row) => console.log(row),
            externalFilters: networkingDevicesTableConstants.externalFilters,
            tableHeader: NetworkingDevicesTableUtils.tableHeader({ data, setShow, styles }),
            checkbox: true,
            refreshTable: refreshTable || false,
            kanbanComponent: () => <GridView data={gridConfig} actionData={actionData} />,
        };
    };

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default NetworkingDevicesTable;
