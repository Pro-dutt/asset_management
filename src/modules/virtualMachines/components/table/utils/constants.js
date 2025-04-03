import globalConstants from "@/lib/utils/contants";
import virtualMachineConstants from "../../form/utils/constants";

const FILTER_OPTIONS = {
    status: { placeholder: "Select VM status", options: virtualMachineConstants.STATUS.getOptions() },
    environment: { options: globalConstants.ENVIRONMENTS.getOptions() },
    backupEnabled: { placeholder: "Select backup enable", options: globalConstants.BACKUP_STATUS.getOptions() },
};

const TABLE_LIMITS = {
    defaultValue: "20",
    limitStart: "10",
    limitEnd: "50",
    multipleOf: "10",
};

const virtualMachinesTableConstants = {
    TABLE_API_URL: "/virtual-machine",
    FILTER_OPTIONS,
    TABLE_LIMITS,
    externalFilters: {
        title: "Virtual Machines List",
        filterFields: Object.keys(FILTER_OPTIONS).map((key) => ({
            type: "select",
            name: key,
            grid: 3,
            options: FILTER_OPTIONS[key].options,
            placeholder: FILTER_OPTIONS[key].placeholder || `Select ${key.replace(/([A-Z])/g, " $1").trim()}`,
        })),
        parentPayloadKey: `[search][filters]`,
    },
    TABLE_SORTING: {
        initialSort: "Asset ID",
        initialSortOrder: "asc",
    },
};

export default virtualMachinesTableConstants;
