import DynamicForm from "@/components/form";
import { useServerInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";

const ServerInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, ServerInfoFormErrors } = useServerInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="server-form"
                formId="server"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={ServerInfoFormErrors}
            />
        </div>
    );
};
export default ServerInfoForm;
