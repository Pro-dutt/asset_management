import DynamicForm from "@/components/form";
import { useVirtualMachineInfoForm } from "../../hooks/useForm";
import GlobalICONS from "@/lib/utils/icons";

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
                icon: GlobalICONS.LEFT_ARROW,
            },
            {
                label: "Submit",
                type: "Submit",
                icon: GlobalICONS.NEXT_ARROW,
                iconPosition: "right",
                loading: isLoading,
            },
        ].filter(Boolean);
    };

    return (
        <div>
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
