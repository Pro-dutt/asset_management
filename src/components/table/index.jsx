import React, { useState, useEffect, useCallback, useMemo } from "react";
import styles from "./styles/index.module.css";
// import { useRouter, useSearchParams } from "next/navigation";
import DataNotFound from "../DataNotFound";
import apiClient from "@/services/api/config";
import "./styles/index.css";
import "./styles/root.css";
import TableFilter from "./components/filters";
import TableSearch from "./components/searches";
import TablePagination from "./components/pagination";
import TableError from "./components/tableError";
import TableView from "./components/tableView";
import { useLocation } from "react-router-dom";
import useCustomRouter from "./hooks/useCustomRouter";
export const useSearchParams = () => {
    const location = useLocation();
    return new URLSearchParams(location.search);
};

const Table = ({ tableData }) => {
    const router = useCustomRouter();
    const searchParams = useSearchParams();

    // Memoizing initialValues to avoid unnecessary re-renders
    const initialValues = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams.toString()]);

    const [data, setData] = useState(tableData);
    const [dataView, setDataView] = useState({ table: true });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [checkboxState, setCheckboxState] = useState({});

    const fetchData = useCallback(
        async (payload) => {
            const url = tableData?.url;
            if (!url) return;

            setIsLoading(true);
            setError(null);

            try {
                const response = await apiClient.get(url, { params: payload });
                const newData = tableData.getTableData(response.data);
                setData((prev) => newData);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to fetch data. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        },
        [tableData?.url]
    );
    useEffect(() => {
        if (tableData) {
            const { rows, ...restTableData } = tableData;
            setData((prev) => ({ ...prev, ...restTableData }));
        }
    }, [tableData]);

    useEffect(() => {
        fetchData(initialValues);
    }, [initialValues, tableData]);
    return (
        <div className={styles.table_container}>
            {/* Filters and Search */}
            <TableFilter router={router} initialValues={initialValues} data={data.externalFilters} searchParams={searchParams} />
            <TableSearch
                dataView={dataView}
                showDataViewButton={data.gridComponent || data.kanbanComponent ? true : false}
                setDataView={setDataView}
                initialValues={initialValues}
                router={router}
                data={data.tableHeader}
                searchParams={searchParams}
            />

            <TableError error={error} />

            {/* Table View */}
            {dataView.table && (
                <TableView
                    isLoading={isLoading}
                    checkboxState={checkboxState}
                    setCheckboxState={setCheckboxState}
                    data={data}
                    router={router}
                    initialValues={initialValues}
                    searchParams={searchParams}
                />
            )}

            {/* Grid View */}
            {dataView.grid && <div className={styles.grid_view_container}>{data.rows?.length > 0 ? data.gridComponent() : <DataNotFound message="Empty List" />}</div>}

            {/* Kanban View */}
            {dataView.kanban && <div className={styles.grid_view_container}>{data.rows?.length > 0 ? data.kanbanComponent() : <DataNotFound message="Empty List" />}</div>}

            {/* Pagination */}
            <TablePagination data={data} router={router} initialValues={initialValues} searchParams={searchParams} />
        </div>
    );
};

export default React.memo(Table);
