import DynamicForm from "@/components/form";
import { useRoleInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
export const RoleInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, RoleInfoFormErrors } = useRoleInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="role-form"
                formId="role"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={RoleInfoFormErrors}
            />
        </div>
    );
};
