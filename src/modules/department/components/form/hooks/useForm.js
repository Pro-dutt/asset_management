import { useMemo } from "react";
import { useDepartment } from "@/services/context/department";

export const useDepartmentInfoForm = (data = {}, onSuccess) => {
    const { departmentCreation, departmentUpdating } = useDepartment();
    const formConfig = useMemo(
        () => [
            {
                type: "text",
                name: "name",
                label: "Department Name",
                placeholder: "Department name",
                grid: 1,
                defaultValue: data?.name,
                validationRules: {},
                validateOnChange: true,
            },
        ],
        [data]
    );

    const operation = data?._id ? departmentUpdating : departmentCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?._id && { id: data._id }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, departmentInfoFormErrors: operation?.errorMessages };
};
