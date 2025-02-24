import TableUtils from "@/components/table/utils";
import serversTableConstants from "./constants";
import TableIcon from "@/components/table/utils/icon";
import apiConstants from "@/services/utils/constants";
import tenantConstants from "@/modules/tenant/utils/constants";

class ServersTableUtils {
    static tableHeader({ data, setShow, styles, hasPermission }) {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["productName", "serialNumber", "serviceTag"]);
        const url = serversTableConstants.TABLE_API_URL;
        return {
            limit: serversTableConstants.TABLE_LIMITS,
            actionButtons: [
                hasPermission(url, "POST") && {
                    variant: "primary",
                    icon: TableIcon.PLUS,
                    label: "Add New Server",
                    onClick: () => setShow({ add: true }),
                },
                {
                    flat: true,
                    outlined: true,
                    tonal: true,
                    icon: TableIcon.EXPORT,
                    label: "Export",
                    href: `${apiConstants.BACKEND_API_BASE_URL}/server?toDownload=1`,
                    target: "_blank",
                    onClick: () => console.log("Exporting data..."),
                },
            ].filter(Boolean),
            filters: [
                {
                    type: "text",
                    name: "searchText",
                    grid: 2,
                    placeholder: "Search server",
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
            [tenantConstants.TENANT_IDENTIFIER]: { key: "tenantId", value: item.tenantId.name },
            "Asset Id": { key: "assetId", value: item.assetId },
            "Product Name": { key: "itemName", value: item.itemName },
            Model: { key: "model", value: item.model },
            "Serial Number": { key: "serialNumber", value: item.serialNumber },
            Processor: { key: "processor", value: item.processor },
            "Ram [Gb]": { key: "ram", value: item.ram },
            "Device Status": { key: "statusName", value: item.statusName },
        }));
    }
    static tableActionData({ data, setShow, setServerDetails, hasPermission }) {
        const handleAction = (row, key) => {
            setServerDetails(data?.data?.find((item) => row["Id"].value === item._id));
            setShow({ [key]: true });
        };
        const url = serversTableConstants.TABLE_API_URL;
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
            hasPermission(url, "PUT") && {
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
export default ServersTableUtils;
