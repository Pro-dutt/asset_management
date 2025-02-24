import DynamicForm from "@/components/form";
import { useOperatingSystemInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
export const OperatingSystemInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, OperatingSystemInfoFormErrors } = useOperatingSystemInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="operating-system-form"
                formId="operatingSystem"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={OperatingSystemInfoFormErrors}
            />
        </div>
    );
};
