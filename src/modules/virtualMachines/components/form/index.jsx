import DynamicForm from "@/components/form";
import { useVirtualMachineInfoForm } from "./hooks/useForm";
import GlobalUtils from "@/lib/utils";
import styles from "./styles/index.module.css";

const VirtualMachineInfoForm = ({ data, onCancel }) => {
    const { formConfig, handleFormSubmit, isLoading, virtualMachineInfoFormErrors } = useVirtualMachineInfoForm(data);

    return (
        <div className={styles.container}>
            <DynamicForm
                key="virtual-machine-form"
                formId="virtual-machine"
                formData={formConfig}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
                onSubmit={handleFormSubmit}
                responseErrors={virtualMachineInfoFormErrors}
            />
        </div>
    );
};

export default VirtualMachineInfoForm;
