import DynamicForm from "@/components/form";
import { useDesktopInfoForm } from "./hooks/useForm";

export const DesktopInfoForm = () => {
    const { formConfig, handleFormSubmit, isLoading, DesktopInfoFormErrors } = useDesktopInfoForm();

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
            <DynamicForm key="desktop-form" formId="desktop" formData={formConfig} formButtons={getFormButtons(isLoading)} onSubmit={handleFormSubmit} responseErrors={DesktopInfoFormErrors} />
        </div>
    );
};
