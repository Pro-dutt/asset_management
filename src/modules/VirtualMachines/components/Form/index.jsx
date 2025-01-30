import DynamicForm from "@/components/form";
import { useVirtualMachineInfoForm } from "../../hooks/useForm";
import GlobalICONS from "@/lib/utils/icons";
import styles from "./styles/index.module.css";

export const VirtualMachineInfoForm = () => {
    const { formConfig, handleFormSubmit, isLoading, virtualMachineInfoFormErrors } = useVirtualMachineInfoForm();

    const getFormButtons = (isLoading = false) => {
        return [
            {
                label: "Cancel",
                onClick: () => {},
                variant: "secondary",
                flat: true,
                outlined: true,
            },
            {
                label: "Submit",
                type: "Submit",
                iconPosition: "right",
                loading: isLoading,
            },
        ].filter(Boolean);
    };

    return (
        <div className={styles.container}>
            <DynamicForm
                key="virtual-machine-form"
                formId="virtual-machine"
                formData={formConfig}
                formButtons={getFormButtons(isLoading)}
                onSubmit={handleFormSubmit}
                responseErrors={virtualMachineInfoFormErrors}
            />
        </div>
    );
};
