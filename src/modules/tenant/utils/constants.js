import GlobalICONS from "@/lib/utils/icons";

const tenantConstants = {
    FORM_TENANT_SECTION: {
        title: "Tenant",
        icon: GlobalICONS.ADD_TENANT,
        description: "Specify details of tenant",
    },
};

// Freeze the entire roleConstants object
Object.freeze(tenantConstants);

export default tenantConstants;
