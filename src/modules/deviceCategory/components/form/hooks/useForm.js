import { useMemo } from "react";
import { useDeviceCategory } from "@/services/context/deviceCategory";

export const useDeviceCategoryInfoForm = (data = {}, onSuccess) => {
    const { deviceCategoryCreation, deviceCategoryUpdating } = useDeviceCategory();
    const formConfig = useMemo(
        () => [
            {
                type: "text",
                name: "name",
                label: "Device category Name",
                placeholder: "Device category name",
                grid: 1,
                defaultValue: data?.name,
                validationRules: {},
                validateOnChange: true,
            },
        ],
        [data]
    );

    const operation = data?._id ? deviceCategoryUpdating : deviceCategoryCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?._id && { id: data._id }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, deviceCategoryInfoFormErrors: operation?.errorMessages };
};
