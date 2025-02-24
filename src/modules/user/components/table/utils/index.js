import TableUtils from "@/components/table/utils";
import userTableConstants from "./constants";
import TableIcon from "@/components/table/utils/icon";
import styles from "../styles/index.module.css";
import tenantConstants from "@/modules/tenant/utils/constants";

class UserTableUtils {
    static tableHeader({ data, setShow, styles, hasPermission }) {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["name"]);
        const url = userTableConstants.TABLE_API_URL;
        return {
            limit: userTableConstants.TABLE_LIMITS,
            actionButtons: [
                hasPermission(url, "POST") && {
                    variant: "primary",
                    icon: TableIcon.PLUS,
                    label: "Add New User",
                    onClick: () => setShow({ add: true }),
                },
            ].filter(Boolean),
            filters: [
                {
                    type: "text",
                    name: "searchText",
                    grid: 2,
                    placeholder: "Search user",
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
            Email: { key: "email", value: item.email },
            status: { key: "status", value: item.status },
            [tenantConstants.TENANT_IDENTIFIER]: {
                key: "tenantId",
                value: (
                    <div className={styles.routes_container}>
                        {item.tenantId?.map((tenant) => (
                            <div>
                                <p>{tenant?.name}</p>
                            </div>
                        ))}
                    </div>
                ),
            },
            Roles: {
                key: "roles",
                value: (
                    <div className={styles.routes_container}>
                        {item.roles.map((role) => (
                            <div>
                                <p>{role.name}</p>
                            </div>
                        ))}
                    </div>
                ),
            },
        }));
    }
    static tableActionData({ data, setShow, setUserDetails, hasPermission }) {
        const handleAction = (row, key) => {
            setUserDetails(data?.data?.find((item) => row["Id"].value === item._id));
            setShow({ [key]: true });
        };
        const url = userTableConstants.TABLE_API_URL;
        return [
            hasPermission(url, "DELETE") && {
                name: "Delete",
                functions: (row) => handleAction(row, "delete"),
                label: "Delete Entry",
            },
            // {
            //     name: "View",
            //     functions: (row) => handleAction(row, "view"),
            //     label: "View Details",
            // },
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
export default UserTableUtils;
