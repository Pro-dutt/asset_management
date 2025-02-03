import DynamicForm from "@/components/form";
import { useDesktopInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";

export const DesktopInfoForm = () => {
    const { formConfig, handleFormSubmit, isLoading, DesktopInfoFormErrors } = useDesktopInfoForm();
    
    const onCancel = () => {
        // Handle form cancellation
    }
  

    return (
        <div className="" style={{ paddingInline: "1rem" }}>
            <DynamicForm key="desktop-form" formId="desktop" formData={formConfig} formButtons={ GlobalUtils.getFormButtons(isLoading,onCancel)} onSubmit={handleFormSubmit} responseErrors={DesktopInfoFormErrors} />
        </div>
    );
};
