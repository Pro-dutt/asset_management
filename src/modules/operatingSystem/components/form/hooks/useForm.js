import { useMemo } from "react";
import { useOperatingSystem } from "@/services/context/operatingSystem";

export const useOperatingSystemInfoForm = (data = {}, onSuccess) => {
    const { operatingSystemCreation, operatingSystemUpdating } = useOperatingSystem();
    const formConfig = useMemo(
        () => [
            {
                type: "text",
                name: "name",
                label: "Operating System Name",
                placeholder: "Operating System name",
                grid: 1,
                defaultValue: data?.name,
                validationRules: {},
                validateOnChange: true,
            },
        ],
        [data]
    );

    const operation = data?._id ? operatingSystemUpdating : operatingSystemCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?._id && { id: data._id }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, operatingSystemInfoFormErrors: operation?.errorMessages };
};
