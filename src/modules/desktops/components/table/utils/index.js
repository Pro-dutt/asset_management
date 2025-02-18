import TableUtils from "@/components/table/utils";
import desktopsTableConstants from "./constants";
import TableIcon from "@/components/table/utils/icon";
import apiConstants from "@/services/utils/constants";
import GlobalUtils from "@/lib/utils";

class DesktopsTableUtils {
    static tableHeader({ data, setShow, styles, getCurrentUser }) {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["itemName", "serialNumber", "serviceTag"]);
        return {
            limit: desktopsTableConstants.TABLE_LIMITS,
            actionButtons: [
                GlobalUtils.hasPermission("/desktop", "POST", getCurrentUser) && {
                    variant: "primary",
                    icon: TableIcon.PLUS,
                    label: "Add New Desktop",
                    onClick: () => setShow({ add: true }),
                },
                {
                    variant: "secondary",
                    flat: true,
                    className: styles.export,
                    icon: TableIcon.EXPORT,
                    label: "Export",
                    href: `${apiConstants.BACKEND_API_BASE_URL}/desktop?toDownload=1`,
                    target: "_blank",
                    onClick: () => console.log("Exporting data..."),
                },
            ].filter(Boolean),
            filters: [
                {
                    type: "text",
                    name: "searchText",
                    grid: 2,
                    placeholder: "Search desktop",
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
            "Product Name": { key: "itemName", value: item.itemName },
            Model: { key: "model", value: item.model },
            "Serial Number": { key: "serialNumber", value: item.serialNumber },
            Processor: { key: "processor", value: item.processor },
            "Ram [Gb]": { key: "ram", value: item.ram },
            "Device Status": { key: "statusName", value: item.statusName },
        }));
    }
    static tableActionData({ data, setShow, setDesktopDetails, getCurrentUser }) {
        const handleAction = (row, key) => {
            console.log(row);
            console.log(
                "row>>>>>>>>>>>>>>>>>>>>>>",

                data?.data?.find((item) => row["Id"].value === item._id)
            );
            setDesktopDetails(data?.data?.find((item) => row["Id"].value === item._id));
            setShow({ [key]: true });
        };

        return [
            GlobalUtils.hasPermission("/desktop", "DELETE", getCurrentUser) && {
                name: "Delete",
                functions: (row) => handleAction(row, "delete"),
                label: "Delete Entry",
            },
            {
                name: "View",
                functions: (row) => handleAction(row, "view"),
                label: "View Details",
            },
            GlobalUtils.hasPermission("/desktop", "PUT", getCurrentUser) && {
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
export default DesktopsTableUtils;
