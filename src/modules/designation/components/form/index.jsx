import DynamicForm from "@/components/form";
import { useDesignationInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
export const DesignationInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, DesignationInfoFormErrors } = useDesignationInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="designation-form"
                formId="designation"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={DesignationInfoFormErrors}
            />
        </div>
    );
};
