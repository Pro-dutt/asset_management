import { useMemo } from "react";
import virtualMachineConstants from "../utils/constants";
import { useVirtualMachines } from "@/services/context/virtualMachines";
import VirtualMachineUtils from "../utils";

export const useVirtualMachineInfoForm = (data = {}) => {
    const { virtualMachineCreation } = useVirtualMachines();

    const formConfig = useMemo(
        () => [
            ...VirtualMachineUtils.createFormSection(virtualMachineConstants.FORM_SECTIONS.VM_DETAILS, data),
            ...VirtualMachineUtils.createFormSection(virtualMachineConstants.FORM_SECTIONS.HOST_DETAILS, data),
            ...VirtualMachineUtils.createFormSection(virtualMachineConstants.FORM_SECTIONS.RESOURCE_ALLOCATION, data),
            ...VirtualMachineUtils.createFormSection(virtualMachineConstants.FORM_SECTIONS.NETWORK_CONNECTIVITY, data),
            ...VirtualMachineUtils.createFormSection(virtualMachineConstants.FORM_SECTIONS.AUTHENTICATION_ACCESS, data),
            ...VirtualMachineUtils.createFormSection(virtualMachineConstants.FORM_SECTIONS.BACKUP_RESTORATION, data),
            ...VirtualMachineUtils.createFormSection(virtualMachineConstants.FORM_SECTIONS.COMPLIANCE_SECURITY, data),
            ...VirtualMachineUtils.createFormSection(virtualMachineConstants.FORM_SECTIONS.ACCOUNTABILITY_CONTACT, data),
            ...VirtualMachineUtils.createFormSection(virtualMachineConstants.FORM_SECTIONS.ASSOCIATED_FILES, data),
        ],
        [data]
    );

    const handleFormSubmit = (formData) => {
        virtualMachineCreation.execute({
            payload: formData,
            onSuccess: () => {
                // onboardedUser.fetch({});
            },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: virtualMachineCreation.isLoading, virtualMachineInfoFormErrors: virtualMachineCreation.errorMessages };
};
