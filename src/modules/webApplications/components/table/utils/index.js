import TableUtils from "@/components/table/utils";
import webApplicationsTableConstants from "./constants";
import TableIcon from "@/components/table/utils/icon";

class WebApplicationTableUtils {
    static tableHeader({ data, setShow, styles }) {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["productName", "serialNumber", "serviceTag"]);
        return {
            limit: webApplicationsTableConstants.TABLE_LIMITS,
            actionButtons: [
                {
                    variant: "primary",
                    icon: TableIcon.PLUS,
                    label: "Add New Web Application",
                    onClick: () => setShow({ add: true }),
                },
                {
                    variant: "secondary",
                    flat: true,
                    className: styles.export,
                    icon: TableIcon.EXPORT,
                    label: "Export",
                    onClick: () => console.log("Exporting data..."),
                },
            ],
            filters: [
                {
                    type: "text",
                    name: "searchText",
                    grid: 2,
                    placeholder: "Search web application",
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
            "Asset Id": { key: "assetId", value: item.assetId },
            "Product Name": { key: "productName", value: item.productName },
            Model: { key: "model", value: item.model },
            "Serial Number": { key: "serialNumber", value: item.serialNumber },
            Processor: { key: "processor", value: item.processor },
            "Ram [Gb]": { key: "ramGb", value: item.ramGb },
            "Device Status": { key: "deviceStatus", value: item.deviceStatus },
        }));
    }
    static tableActionData({ data, setShow, setWebApplicationDetails }) {
        const handleAction = (row, key) => {
            setWebApplicationDetails(data?.data?.find((item) => row["Id"].value === item._id));
            setShow({ [key]: true });
        };

        return [
            {
                name: "Delete",
                functions: (row) => handleAction(row, "delete"),
                label: "Delete Entry",
            },
            {
                name: "View",
                functions: (row) => handleAction(row, "view"),
                label: "View Details",
            },
            {
                name: "Edit",
                functions: (row) => handleAction(row, "edit"),
                label: "Edit Details",
            },
        ];
    }

    static tablePagination(data) {
        return {
            totalPage: data.totalPages || "0",
            totalItemCount: data.totalDocuments || "0",
        };
    }
}
export default WebApplicationTableUtils;
