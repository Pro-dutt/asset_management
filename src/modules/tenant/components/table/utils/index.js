import TableUtils from "@/components/table/utils";
import TableIcon from "@/components/table/utils/icon";
import styles from "../styles/index.module.css";
import tenantTableConstants from "./constants";

class TenantTableUtils {
    static tableHeader({ data, setShow, styles }) {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["name"]);
        return {
            limit: tenantTableConstants.TABLE_LIMITS,
            actionButtons: [
                {
                    variant: "primary",
                    icon: TableIcon.PLUS,
                    label: "Add New Tenant",
                    onClick: () => setShow({ add: true }),
                },
            ],
            filters: [
                {
                    type: "text",
                    name: "searchText",
                    grid: 2,
                    placeholder: "Search tenant",
                    autoSuggestion: {
                        initialData: autoSuggestionData,
                        autoSuggestionUrl: "/api/tenant",
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
            Email: { key: "email", value: item.email },
            // Address: { key: "address", value: item.address },
            Country: { key: "country", value: item.country },
            State: { key: "state", value: item.state },
            Pincode: { key: "pincode", value: item.pincode },
            // Contact: { key: "contact", value: item.contact },
            // Remarks: { key: "remarks", value: item.remarks },
            Status: { key: "status", value: item.status },
        }));
    }
    static tableActionData({ data, setShow, setTenantDetails }) {
        const handleAction = (row, key) => {
            setTenantDetails(data?.data?.find((item) => row["Id"].value === item._id));
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
export default TenantTableUtils;
