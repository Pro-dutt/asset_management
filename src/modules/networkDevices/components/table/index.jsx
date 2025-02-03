import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import networkingDevicesTableConstants from "./utils/constants";
import NetworkingDevicesTableUtils from "./utils";
import "./styles/index.css";

const NetworkingDevicesTable = ({ setNetworkingDeviceDetails, setShow }) => {
    const getTableData = (data) => ({
        rows: NetworkingDevicesTableUtils.tableRow(data),
        actionData: NetworkingDevicesTableUtils.tableActionData({ data, setShow, setNetworkingDeviceDetails }),
        url: networkingDevicesTableConstants.TABLE_API_URL,
        pagination: NetworkingDevicesTableUtils.tablePagination(data),
        sorting: networkingDevicesTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: networkingDevicesTableConstants.externalFilters,
        tableHeader: NetworkingDevicesTableUtils.tableHeader({ data, setShow, styles }),
        checkbox: true,
    });

    const tableData = useMemo(() => getTableData({}), []);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default NetworkingDevicesTable;
