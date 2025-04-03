import DynamicForm from "@/components/form";
import { useDeviceStateInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
export const DeviceStateInfoForm = ({ data, onCancel, onSuccess }) => {
    const { formConfig, handleFormSubmit, isLoading, DeviceStateInfoFormErrors } = useDeviceStateInfoForm(data, onSuccess);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="device-state-form"
                formId="deviceState"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={DeviceStateInfoFormErrors}
            />
        </div>
    );
};
