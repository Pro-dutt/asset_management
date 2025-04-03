import globalConstants from "@/lib/utils/contants";
import webApplicationConstants from "../../form/utils/constants";

const FILTER_OPTIONS = {
    status: { options: webApplicationConstants.STATUS.getOptions(), placeholder: "Select application status" },
    face: { options: webApplicationConstants.FACE_LEVELS.getOptions(), placeholder: "Select face/exposure level" },
    backupEnabled: { options: globalConstants.BACKUP_STATUS.getOptions(), placeholder: "Select backup enable" },
};

const TABLE_LIMITS = {
    defaultValue: "20",
    limitStart: "10",
    limitEnd: "50",
    multipleOf: "10",
};

const webApplicationsTableConstants = {
    TABLE_API_URL: "/web-application",
    FILTER_OPTIONS,
    TABLE_LIMITS,
    externalFilters: {
        title: "Web Applications List",
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

export default webApplicationsTableConstants;
