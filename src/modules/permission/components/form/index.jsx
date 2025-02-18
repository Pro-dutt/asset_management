import DynamicForm from "@/components/form";
import { usePermissionInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
export const PermissionInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, PermissionInfoFormErrors } = usePermissionInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="permission-form"
                formId="permission"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={PermissionInfoFormErrors}
            />
        </div>
    );
};
