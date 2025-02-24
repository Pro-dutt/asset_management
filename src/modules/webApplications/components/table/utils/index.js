import TableUtils from "@/components/table/utils";
import webApplicationsTableConstants from "./constants";
import TableIcon from "@/components/table/utils/icon";
import apiConstants from "@/services/utils/constants";
import webApplicationConstants from "../../form/utils/constants";
import tenantConstants from "@/modules/tenant/utils/constants";

class WebApplicationTableUtils {
    static tableHeader({ data, setShow, styles, hasPermission }) {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["productName", "serialNumber", "serviceTag"]);
        const url = webApplicationsTableConstants.TABLE_API_URL;
        return {
            limit: webApplicationsTableConstants.TABLE_LIMITS,
            actionButtons: [
                hasPermission(url, "POST") && {
                    variant: "primary",
                    icon: TableIcon.PLUS,
                    label: "Add New Web Application",
                    onClick: () => setShow({ add: true }),
                },
                {
                    flat: true,
                    outlined: true,
                    tonal: true,
                    icon: TableIcon.EXPORT,
                    label: "Export",
                    href: `${apiConstants.BACKEND_API_BASE_URL}/web-application?toDownload=1`,
                    target: "_blank",
                    onClick: () => console.log("Exporting data..."),
                },
            ].filter(Boolean),
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
            [tenantConstants.TENANT_IDENTIFIER]: { key: "tenantId", value: item.tenantId.name },
            "Host Asset Id": { key: "hostAssetId", value: item.hostAssetId },
            "Application Name": { key: "applicationName", value: item.applicationName },
            Version: { key: "version", value: item.version },
            URL: { key: "url", value: item.url },
            IP: { key: "ip", value: item.ip },
            Responsible: { key: "responsible", value: item.responsible },
            Status: { key: "statusName", value: webApplicationConstants.STATUS.getLabel(item.status) },
        }));
    }
    static tableActionData({ data, setShow, setWebApplicationDetails, hasPermission }) {
        const handleAction = (row, key) => {
            setWebApplicationDetails(data?.data?.find((item) => row["Id"].value === item._id));
            setShow({ [key]: true });
        };
        const url = webApplicationsTableConstants.TABLE_API_URL;
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
export default WebApplicationTableUtils;
