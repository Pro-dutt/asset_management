import GlobalICONS from "@/lib/utils/icons";

const tenantConstants = {
    TENANT_IDENTIFIER: "Port",

    FORM_TENANT_SECTION: {
        title: "Port",
        icon: GlobalICONS.ADD_TENANT,
        description: "Specify details of Port",
    },
};

// Freeze the entire roleConstants object
Object.freeze(tenantConstants);

export default tenantConstants;
