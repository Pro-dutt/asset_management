import DynamicForm from "@/components/form";
import { useWebApplicationInfoForm } from "./hooks/useForm";

export const WebApplicationInfoForm = () => {
    const { formConfig, handleFormSubmit, isLoading, WebApplicationInfoFormErrors } = useWebApplicationInfoForm();

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
                responseErrors={WebApplicationInfoFormErrors}
            />
        </div>
    );
};
