import { useTenant } from "@/services/context/tenant";
import tenantConstants from "./constants";

class TenantUtils {
    static getTenantFormFields(data, multiple = false) {
        const { tenantDropdownList } = useTenant();
        console.log("data here", data.tenantId);
        return [
            {
                type: "select",
                name: "tenantId",
                label: tenantConstants.TENANT_IDENTIFIER,
                multiple,
                grid: 1,
                placeholder: `Select ${tenantConstants.TENANT_IDENTIFIER}`,
                options: TenantUtils.formatTenantsForDropdownList(tenantDropdownList.data),
                defaultValue: multiple ? data.tenantId?.map((tanent) => tanent._id) : data?.tenantId?._id,
                validateOnChange: true,
                validationRules: {
                    required: true,
                },
            },
        ];
    }

    static formatTenantsForDropdownList(data) {
        return data.map((item) => ({ label: item.name, value: item._id }));
    }
}
export default TenantUtils;
