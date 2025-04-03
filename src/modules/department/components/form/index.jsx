import DynamicForm from "@/components/form";
import { useDepartmentInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
export const DepartmentInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, DepartmentInfoFormErrors } = useDepartmentInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="department-form"
                formId="department"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={DepartmentInfoFormErrors}
            />
        </div>
    );
};
