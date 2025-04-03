import { useEffect, useMemo } from "react";
import PermissionUtils from "../utils";
import { usePermission } from "@/services/context/permission";
import permissionConstants from "../utils/constants";
import { useRoute } from "@/services/context/route";

export const usePermissionInfoForm = (data = {}, onSuccess) => {
    const { routeDropdownList } = useRoute();
    const { permissionCreation, permissionUpdating } = usePermission();
    //console.log(data);
    const formConfig = useMemo(
        () => [
            {
                type: "text",
                name: "name",
                label: "Permission Name",
                placeholder: "Permission name",
                grid: 1,
                defaultValue: data?.name,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "routes",
                label: "Routes",
                grid: 1,
                multiple: true,
                placeholder: "Select routes",
                options: PermissionUtils.formatRoutesForDropdownList(routeDropdownList.data),
                defaultValue: data?.routes?.map((item) => item._id),
                validateOnChange: true,
                validationRules: {},
            },
        ],
        [data, routeDropdownList.data]
    );

    const operation = data?._id ? permissionUpdating : permissionCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?._id && { id: data._id }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    useEffect(() => {
        routeDropdownList.fetch({});
    }, []);
    console.log(routeDropdownList.data);
    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, permissionInfoFormErrors: operation?.errorMessages };
};
