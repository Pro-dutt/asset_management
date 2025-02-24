import TableUtils from "@/components/table/utils";
import deviceStateTableConstants from "./constants";
import TableIcon from "@/components/table/utils/icon";

class DeviceStateTableUtils {
    static tableHeader({ data, setShow, styles, hasPermission }) {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["name"]);
        const url = deviceStateTableConstants.TABLE_API_URL;
        return {
            limit: deviceStateTableConstants.TABLE_LIMITS,
            actionButtons: [
                hasPermission(url, "POST") && {
                    variant: "primary",
                    icon: TableIcon.PLUS,
                    label: "Add New Device State",
                    onClick: () => setShow({ add: true }),
                },
            ].filter(Boolean),
            filters: [
                {
                    type: "text",
                    name: "searchText",
                    grid: 2,
                    placeholder: "Search device state",
                    autoSuggestion: {
                        initialData: autoSuggestionData,
                        autoSuggestionUrl: "/api/suggestions",
                        minChars: 1,
                        maxSuggestions: 5,
                    },
                    className: styles.search_field,
                },
            ],
        };
    }

    static tableRow(data = { data: [] }) {
        return data?.data?.map((item) => ({
            Id: { key: "id", value: item._id, type: "hidden" },
            Name: { key: "name", value: item.name },
        }));
    }
    static tableActionData({ data, setShow, setDeviceStateDetails, hasPermission }) {
        const handleAction = (row, key) => {
            setDeviceStateDetails(data?.data?.find((item) => row["Id"].value === item._id));
            setShow({ [key]: true });
        };
        const url = deviceStateTableConstants.TABLE_API_URL;
        return [
            hasPermission(url, "DELETE") && {
                name: "Delete",
                functions: (row) => handleAction(row, "delete"),
                label: "Delete Entry",
            },
            {
                name: "View",
                functions: (row) => handleAction(row, "view"),
                label: "View Details",
            },
            hasPermission(url, "PATCH") && {
                name: "Edit",
                functions: (row) => handleAction(row, "edit"),
                label: "Edit Details",
            },
        ].filter(Boolean);
    }

    static tablePagination(data) {
        return {
            totalPage: data.totalPages || "0",
            totalItemCount: data.totalDocuments || "0",
        };
    }
}
export default DeviceStateTableUtils;
