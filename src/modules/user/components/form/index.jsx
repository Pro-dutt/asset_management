import DynamicForm from "@/components/form";
import { useUserInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
export const UserInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, UserInfoFormErrors } = useUserInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="user-form"
                formId="user"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={UserInfoFormErrors}
            />
        </div>
    );
};
