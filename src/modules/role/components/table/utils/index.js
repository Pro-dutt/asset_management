import TableUtils from "@/components/table/utils";
import roleTableConstants from "./constants";
import TableIcon from "@/components/table/utils/icon";
import styles from "../styles/index.module.css";
import DetailsUtils from "@/components/details/utils";

class RoleTableUtils {
    static tableHeader({ data, setShow, styles }) {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["name"]);
        return {
            limit: roleTableConstants.TABLE_LIMITS,
            actionButtons: [
                {
                    variant: "primary",
                    icon: TableIcon.PLUS,
                    label: "Add New Role",
                    onClick: () => setShow({ add: true }),
                },
            ],
            filters: [
                {
                    type: "text",
                    name: "searchText",
                    grid: 2,
                    placeholder: "Search role",
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
            Permissions: {
                key: "permissions",
                value: (
                    <div className={styles.routes_container}>
                        {item.permissions.map((permission) => (
                            <div>
                                <p>{permission.name}</p>
                            </div>
                        ))}
                    </div>
                ),
            },
        }));
    }
    static tableActionData({ data, setShow, setRoleDetails }) {
        const handleAction = (row, key) => {
            setRoleDetails(data?.data?.find((item) => row["Id"].value === item._id));
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
export default RoleTableUtils;
