import { useMemo } from "react";
import TableUtils from "@/components/table/utils";
import endPointsConstants from "../utils/constants";
import TableIcon from "@/components/table/utils/icon";

export const useTableConfiguration = ({ onAddDesktop, onExport, tableData }) => {
    const externalFilters = useMemo(
        () => ({
            title: "Device List",
            filterFields: Object.keys(endPointsConstants.FILTER_OPTIONS).map((key) => ({
                type: "select",
                name: key,
                grid: 3,
                options: endPointsConstants.FILTER_OPTIONS[key].map((value) => ({ label: value, value })),
                placeholder: `Select ${key.replace(/([A-Z])/g, " $1").trim()}`,
            })),
            parentPayloadKey: "[search][filters]",
        }),
        []
    );

    const tableHeader = useMemo(
        () => ({
            limit: endPointsConstants.TABLE_LIMITS,
            actionButtons: [
                {
                    variant: "primary",
                    icon: TableIcon.PLUS,
                    label: "Add New Desktop",
                    onClick: onAddDesktop,
                },
                {
                    variant: "secondary",
                    flat: true,
                    className: "export-button",
                    icon: TableIcon.EXPORT,
                    label: "Export",
                    onClick: onExport,
                },
            ],
            filters: [
                {
                    type: "text",
                    name: "searchText",
                    grid: 2,
                    placeholder: "Search desktop",
                    autoSuggestion: {
                        initialData: TableUtils.formatDataForAutoSuggestion(tableData.data, ["Product Name", "Serial Number", "Service Tag"]),
                        autoSuggestionUrl: "/api/suggestions",
                        minChars: 1,
                        maxSuggestions: 5,
                    },
                },
            ],
        }),
        [onAddDesktop, onExport, tableData]
    );

    return { externalFilters, tableHeader };
};
