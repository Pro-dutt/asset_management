import GlobalUtils from "@/lib/utils";
import globalConstants from "@/lib/utils/contants";
import GlobalICONS from "@/lib/utils/icons";

const serverConstants = {
    REACHABILITY_STATUS: GlobalUtils.createEnum([
        { key: "REACHABLE", value: 1, label: "Reachable" },
        { key: "NOT_REACHABLE", value: 2, label: "Not Reachable" },
    ]),

    ANTIVIRUS_STATUS: GlobalUtils.createEnum([
        { key: "ACTIVE", value: 1, label: "Active" },
        { key: "INACTIVE", value: 2, label: "Inactive" },
        { key: "NOT_INSTALLED", value: 3, label: "Not Installed" },
    ]),

    FORM_SECTIONS: Object.freeze({
        BACKUP_RESTORATION: {
            title: "Backup & Restoration",
            icon: GlobalICONS.BACKUP,
            description: "Set preferences for data backup and restoration",
        },
        ...globalConstants.DEVICE_MANAGEMENT_FORM_SECTIONS,
    }),
};

// Freeze the entire serverConstants object
Object.freeze(serverConstants);

export default serverConstants;
