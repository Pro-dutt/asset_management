import DynamicForm from "@/components/form";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
import { useDesktopInfoForm } from "@/modules/desktops/components/form/hooks/useForm";
const LaptopInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, DesktopInfoFormErrors } = useDesktopInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="laptop-form"
                formId="laptop"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={DesktopInfoFormErrors}
            />
        </div>
    );
};

export default LaptopInfoForm;
