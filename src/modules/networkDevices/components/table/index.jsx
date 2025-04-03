import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import networkingDevicesTableConstants from "./utils/constants";
import NetworkingDevicesTableUtils from "./utils";
import "./styles/index.css";
import GridView from "@/components/GridView";
import networkDevicesGridConfig from "../grid/config/netowrkGridConfig";
import useHasPermission from "@/lib/hooks/useHasPermission";

const NetworkingDevicesTable = ({ setNetworkingDeviceDetails, setShow, refreshTable }) => {
    const { hasPermission } = useHasPermission();
    const getTableData = (data) => {
        const rows = NetworkingDevicesTableUtils.tableRow(data);
        const actionData = NetworkingDevicesTableUtils.tableActionData({ data, setShow, setNetworkingDeviceDetails, hasPermission });
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
            tableHeader: NetworkingDevicesTableUtils.tableHeader({ data, setShow, styles, hasPermission }),
            checkbox: true,
            refreshTable: refreshTable || false,
            kanbanComponent: () => <GridView data={gridConfig} actionData={actionData} />,
        };
    };

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default NetworkingDevicesTable;
