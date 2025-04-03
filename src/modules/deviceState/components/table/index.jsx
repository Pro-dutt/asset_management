import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import deviceStateTableConstants from "./utils/constants";
import DeviceStateTableUtils from "./utils";
import "./styles/index.css";
import useHasPermission from "@/lib/hooks/useHasPermission";

const DeviceStateTable = ({ setDeviceStateDetails, setShow, refreshTable }) => {
    const { hasPermission } = useHasPermission();
    const getTableData = (data) => ({
        rows: DeviceStateTableUtils.tableRow(data),
        actionData: DeviceStateTableUtils.tableActionData({ data, setShow, setDeviceStateDetails, hasPermission }),
        url: deviceStateTableConstants.TABLE_API_URL,
        pagination: DeviceStateTableUtils.tablePagination(data),
        sorting: deviceStateTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: deviceStateTableConstants.externalFilters,
        tableHeader: DeviceStateTableUtils.tableHeader({ data, setShow, styles, hasPermission }),
        checkbox: true,
        refreshTable: refreshTable || false,
    });

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default DeviceStateTable;
