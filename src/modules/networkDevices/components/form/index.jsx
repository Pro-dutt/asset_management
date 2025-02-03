import DynamicForm from "@/components/form";
import { useNetworkDeviceInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";
const NetworkDeviceInfoForm = ({ data, onCancel }) => {
    const { formConfig, handleFormSubmit, isLoading, NetworkDeviceInfoFormErrors } = useNetworkDeviceInfoForm(data);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="network-device-form"
                formId="network-device"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={NetworkDeviceInfoFormErrors}
            />
        </div>
    );
};

export default NetworkDeviceInfoForm;
