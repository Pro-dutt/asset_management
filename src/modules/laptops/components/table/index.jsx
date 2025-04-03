import React, { useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import laptopsTableConstants from "./utils/constants";
import LaptopsTableUtils from "./utils";
import "./styles/index.css";
import GridView from "@/components/GridView";
import laptopGridConfig from "../grid/config/laptopGridConfig";
import useHasPermission from "@/lib/hooks/useHasPermission";

const LaptopsTable = ({ setLaptopDetails, setShow, refreshTable }) => {
    const { hasPermission } = useHasPermission();
    const getTableData = (data) => {
        const rows = LaptopsTableUtils.tableRow(data);
        const actionData = LaptopsTableUtils.tableActionData({ data, setShow, setLaptopDetails, hasPermission });
        const gridConfig = laptopGridConfig(rows);

        return {
            rows,
            actionData,
            url: laptopsTableConstants.TABLE_API_URL,
            pagination: LaptopsTableUtils.tablePagination(data),
            sorting: laptopsTableConstants.TABLE_SORTING,
            getTableData,
            rowClickHandler: (row) => console.log(row),
            externalFilters: laptopsTableConstants.externalFilters,
            tableHeader: LaptopsTableUtils.tableHeader({ data, setShow, styles, hasPermission }),
            checkbox: true,
            refreshTable: refreshTable || false,
            kanbanComponent: () => <GridView data={gridConfig} actionData={actionData} />,
        };
    };

    const tableData = useMemo(() => getTableData({}), [refreshTable]);

    return <div className={styles.container}>{<Table tableData={tableData} />}</div>;
};

export default LaptopsTable;
