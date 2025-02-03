import DynamicForm from "@/components/form";
import { useServerInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";

const ServerInfoForm = ({ data, onCancel }) => {
    const { formConfig, handleFormSubmit, isLoading, ServerInfoFormErrors } = useServerInfoForm(data);

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
