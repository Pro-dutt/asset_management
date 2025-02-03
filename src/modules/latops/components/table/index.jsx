import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import laptopsTableConstants from "./utils/constants";
import LaptopsTableUtils from "./utils";
import "./styles/index.css";

const LaptopsTable = ({ setLaptopDetails, setShow }) => {
    const getTableData = (data) => ({
        rows: LaptopsTableUtils.tableRow(data),
        actionData: LaptopsTableUtils.tableActionData({ data, setShow, setLaptopDetails }),
        url: laptopsTableConstants.TABLE_API_URL,
        pagination: LaptopsTableUtils.tablePagination(data),
        sorting: laptopsTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: laptopsTableConstants.externalFilters,
        tableHeader: LaptopsTableUtils.tableHeader({ data, setShow, styles }),
        checkbox: true,
    });

    const tableData = useMemo(() => getTableData({}), []);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default LaptopsTable;
