import React, { useState, useEffect, useCallback } from "react";
import styles from "./styles/index.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import DataNotFound from "../DataNotFound";
import apiClient from "@/services/api/config";
import "./styles/index.css";
import "./styles/root.css";
import TableFilter from "./components/filters";
import TableSearch from "./components/searches";
import TablePagination from "./components/pagination";
import TableError from "./components/tableError";
import TableView from "./components/tableView";

const Table = ({ tableData }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialValues = React.useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);

    const [data, setData] = useState(tableData);
    const [dataView, setDataView] = useState({ table: true });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [checkboxState, setCheckboxState] = useState({});

    // Function to fetch paginated data
    const fetchData = useCallback(
        async (payload) => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await apiClient.get(data.url, { params: payload });
                const newData = data.getTableData(response.data);
                setData(newData);
            } catch (err) {
                console.error("Error fetching data:", err);
                // setError("Failed to fetch data. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        },
        [initialValues]
    );

    // Update data when tableData changes
    useEffect(() => {
        if (tableData) {
            setData(tableData);
        }
    }, [tableData]);

    useEffect(() => {
        fetchData(initialValues);
    }, [initialValues]);

    

    return (
        <div className={styles.table_container}>
            {/* Filters and Search */}
            <TableFilter router={router} initialValues={initialValues} data={data.externalFilters} />
            <TableSearch initialValues={initialValues} router={router} data={data.tableHeader} />

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
                    
                />
            )}

            {/* Grid View */}
            {dataView.grid && <div className={styles.grid_view_container}>{data.rows?.length > 0 ? data.gridComponent() : <DataNotFound message="Empty List" />}</div>}

            {/* Kanban View */}
            {dataView.kanban && <div className={styles.grid_view_container}>{data.rows?.length > 0 ? data.kanbanComponent() : <DataNotFound message="Empty List" />}</div>}

            {/* Pagination */}
            <TablePagination data={data} router={router} initialValues={initialValues} />
        </div>
    );
};

export default React.memo(Table);
