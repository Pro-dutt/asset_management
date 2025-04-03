import DynamicForm from "@/components/form";
import { useTenantInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
export const TenantInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, TenantInfoFormErrors } = useTenantInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="tenant-form"
                formId="tenant"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={TenantInfoFormErrors}
            />
        </div>
    );
};
