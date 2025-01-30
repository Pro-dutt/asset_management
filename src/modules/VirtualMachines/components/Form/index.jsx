import DynamicForm from "@/components/form";
import { useVirtualMachineInfoForm } from "../../hooks/useForm";

export const VirtualMachineInfoForm = () => {
    const { formConfig, handleFormSubmit, isLoading, virtualMachineInfoFormErrors } = useVirtualMachineInfoForm();

    const getFormButtons = (isLoading = false) => {
        return [
            {
                label: "Cancel",
                onClick: () => {},
                variant: "danger",
                flat: true,
                outlined: true,
            },
            {
                label: "Submit",
                type: "Submit",
                loading: isLoading,
            },
        ].filter(Boolean);
    };

    return (
        <div className="card">
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
