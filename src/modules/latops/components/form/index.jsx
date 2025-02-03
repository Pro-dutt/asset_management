import DynamicForm from "@/components/form";
import { useDesktopInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
const LaptopInfoForm = ({ data, onCancel }) => {
    const { formConfig, handleFormSubmit, isLoading, DesktopInfoFormErrors } = useDesktopInfoForm(data);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="desktop-form"
                formId="desktop"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={DesktopInfoFormErrors}
            />
        </div>
    );
};

export default LaptopInfoForm;
