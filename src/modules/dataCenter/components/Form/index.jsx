import DynamicForm from "@/components/form";
import { useDataCenterInfoForm } from "./hooks/useForm";

export const DataCenterInfoForm = () => {
    const { formConfig, handleFormSubmit, isLoading, DataCenterInfoFormErrors } = useDataCenterInfoForm();

    const getFormButtons = (isLoading = false) => {
        return [
            {
                label: "Cancel",
                onClick: () => {},
                variant: "danger",
                flat: true,
                outlined: true,
            },
            {
                label: "Submit",
                type: "Submit",
                loading: isLoading,
            },
        ].filter(Boolean);
    };

    return (
        <div className="" style={{ paddingInline: "1rem" }}>
            <DynamicForm
                key="web-application-form"
                formId="web-application"
                formData={formConfig}
                formButtons={getFormButtons(isLoading)}
                onSubmit={handleFormSubmit}
                responseErrors={DataCenterInfoFormErrors}
            />
        </div>
    );
};
