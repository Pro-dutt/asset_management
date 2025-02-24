import { useMemo } from "react";
import { useDesignation } from "@/services/context/designation";

export const useDesignationInfoForm = (data = {}, onSuccess) => {
    const { designationCreation, designationUpdating } = useDesignation();
    const formConfig = useMemo(
        () => [
            {
                type: "text",
                name: "name",
                label: "Designation Name",
                placeholder: "Designation name",
                grid: 1,
                defaultValue: data?.name,
                validationRules: {},
                validateOnChange: true,
            },
        ],
        [data]
    );

    const operation = data?._id ? designationUpdating : designationCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?._id && { id: data._id }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, designationInfoFormErrors: operation?.errorMessages };
};
