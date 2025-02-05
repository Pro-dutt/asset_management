import DynamicForm from "@/components/form";
import { useWebApplicationInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
const WebApplicationInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, WebApplicationInfoFormErrors } = useWebApplicationInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="web-application-form"
                formId="web-application"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={WebApplicationInfoFormErrors}
            />
        </div>
    );
};

export default WebApplicationInfoForm;
