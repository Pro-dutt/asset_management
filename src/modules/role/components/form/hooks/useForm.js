import { useEffect, useMemo } from "react";
import RoleUtils from "../utils";
import { useRole } from "@/services/context/role";
import { usePermission } from "@/services/context/permission";

export const useRoleInfoForm = (data = {}, onSuccess) => {
    const { permissionDropdownList } = usePermission();
    const { roleCreation, roleUpdating } = useRole();
    const formConfig = useMemo(
        () => [
            {
                type: "text",
                name: "name",
                label: "Role Name",
                placeholder: "Role name",
                grid: 1,
                defaultValue: data?.name,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "permissions",
                label: "Permissions",
                grid: 1,
                multiple: true,
                placeholder: "Select permissions",
                options: RoleUtils.formatPermissionForDropdownList(permissionDropdownList.data),
                defaultValue: data?.permissions?.map((item) => item._id),
                validateOnChange: true,
                validationRules: {},
            },
        ],
        [data, permissionDropdownList.data]
    );

    const operation = data?._id ? roleUpdating : roleCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?._id && { id: data._id }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    useEffect(() => {
        permissionDropdownList.fetch({});
    }, []);
    console.log(permissionDropdownList.data);
    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, roleInfoFormErrors: operation?.errorMessages };
};
