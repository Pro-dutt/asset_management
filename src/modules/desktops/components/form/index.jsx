import DynamicForm from "@/components/form";
import { useDesktopInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
export const DesktopInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, DesktopInfoFormErrors } = useDesktopInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="desktop-form"
                formId="desktop"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={DesktopInfoFormErrors}
            />
        </div>
    );
};
