import DynamicForm from "@/components/form";
import { useDeviceCategoryInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
export const DeviceCategoryInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, DeviceCategoryInfoFormErrors } = useDeviceCategoryInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="device-category-form"
                formId="deviceCategory"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={DeviceCategoryInfoFormErrors}
            />
        </div>
    );
};
