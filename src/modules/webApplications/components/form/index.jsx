import DynamicForm from "@/components/form";
import { useWebApplicationInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
const WebApplicationInfoForm = ({ data, onCancel }) => {
    const { formConfig, handleFormSubmit, isLoading, WebApplicationInfoFormErrors } = useWebApplicationInfoForm(data, onCancel);

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
