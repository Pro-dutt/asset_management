import DynamicForm from "@/components/form";
import { useServerInfoForm } from "./hooks/useForm";

export const ServerInfoForm = () => {
    const { formConfig, handleFormSubmit, isLoading, ServerInfoFormErrors } = useServerInfoForm();

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
            <DynamicForm key="server-form" formId="server" formData={formConfig} formButtons={getFormButtons(isLoading)} onSubmit={handleFormSubmit} responseErrors={ServerInfoFormErrors} />
        </div>
    );
};
