import { useMemo } from "react";
import { useDeviceState } from "@/services/context/deviceState";

export const useDeviceStateInfoForm = (data = {}, onSuccess) => {
    const { deviceStateCreation, deviceStateUpdating } = useDeviceState();
    const formConfig = useMemo(
        () => [
            {
                type: "text",
                name: "name",
                label: "Device State Name",
                placeholder: "Device state name",
                grid: 1,
                defaultValue: data?.name,
                validationRules: {},
                validateOnChange: true,
            },
        ],
        [data]
    );

    const operation = data?._id ? deviceStateUpdating : deviceStateCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?._id && { id: data._id }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, deviceStateInfoFormErrors: operation?.errorMessages };
};
