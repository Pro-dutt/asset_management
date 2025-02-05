import TableUtils from "@/components/table/utils";
import desktopsTableConstants from "./constants";
import TableIcon from "@/components/table/utils/icon";
import ConfirmationAlert from "@/components/ConfirmationAlert";
import { useDesktop } from "@/services/context/desktop";

class DesktopsTableUtils {
    static tableHeader({ data, setShow, styles }) {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["productName", "serialNumber", "serviceTag"]);
        return {
            limit: desktopsTableConstants.TABLE_LIMITS,
            actionButtons: [
                {
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
                    onClick: () => console.log("Exporting data..."),
                },
            ],
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
    static tableActionData({ data, setShow, setDesktopDetails }) {
        const handleAction = (row, key) => {
            setDesktopDetails(data?.data?.find((item) => row["Id"].value === item._id));
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

    static async handleDelete({ data, setDesktopDetails, desktopDeletion }) {
        ConfirmationAlert.showDeleteConfirmation({
            title: "Delete Item",
            text: "Are you sure you want to delete this item?",
            onConfirm: async () => {
                try {
                    if (data?.inventoryId) {
                        await desktopDeletion.execute({
                            id: data.inventoryId,
                            options: { showNotification: true },
                        });

                        ConfirmationAlert.showSuccess({
                            title: "Deleted!",
                            text: "Your item has been deleted successfully.",
                        });

                        // Reset the selected item
                        setDesktopDetails(null);
                    } else {
                        console.error("Invalid data for deletion");
                    }
                } catch (error) {
                    ConfirmationAlert.showError({
                        title: "Deletion Failed",
                        text: error.message || "An unexpected error occurred.",
                    });
                }
            },
            onCancel: () => {
                setDesktopDetails((prev) => ({ ...prev, delete: false }));
            },
        });
    }
}
export default DesktopsTableUtils;
