import TableUtils from "@/components/table/utils";
import virtualMachinesTableConstants from "./constants";
import TableIcon from "@/components/table/utils/icon";
import apiConstants from "@/services/utils/constants";
import globalConstants from "@/lib/utils/contants";

class VirtualMachinesTableUtils {
    static tableHeader({ data, setShow, styles }) {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["productName", "serialNumber", "serviceTag"]);
        return {
            limit: virtualMachinesTableConstants.TABLE_LIMITS,
            actionButtons: [
                {
                    variant: "primary",
                    icon: TableIcon.PLUS,
                    label: "Add New virtual Machine",
                    onClick: () => setShow({ add: true }),
                },
                {
                    variant: "secondary",
                    flat: true,
                    className: styles.export,
                    icon: TableIcon.EXPORT,
                    label: "Export",
                    href: `${apiConstants.BACKEND_API_BASE_URL}/virtual-machine?toDownload=1`,
                    target: "_blank",
                    onClick: () => console.log("Exporting data..."),
                },
            ],
            filters: [
                {
                    type: "text",
                    name: "searchText",
                    grid: 2,
                    placeholder: "Search virtual machine",
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
            status: { key: "status", value: globalConstants.DEVICE_STATES.getLabel(item.status) },
            "VM Name": { key: "vmName", value: item.vmName },
            Environment: { key: "environment", value: item.environment },
            "MAC Address": { key: "macAddress", value: item.macAddress },
            "OS Version": { key: "osVersion", value: item.osVersion },
            "Backup Enabled": { key: "backupEnabled", value: globalConstants.BACKUP_STATUS.getLabel(item.backupEnabled ? 1 : 0) },
        }));
    }
    static tableActionData({ data, setShow, setVirtualMachineDetails }) {
        const handleAction = (row, key) => {
            setVirtualMachineDetails(data?.data?.find((item) => row["Id"].value === item._id));
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
export default VirtualMachinesTableUtils;
