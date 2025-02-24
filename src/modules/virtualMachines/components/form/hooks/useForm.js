import { useEffect, useMemo } from "react";
import virtualMachineConstants from "../utils/constants";
import { useVirtualMachines } from "@/services/context/virtualMachines";
import VirtualMachineUtils from "../utils";
import { useDepartment } from "@/services/context/department";
import { useOperatingSystem } from "@/services/context/operatingSystem";

export const useVirtualMachineInfoForm = (data = {}, onSuccess) => {
    const { virtualMachineCreation, virtualMachineUpdation } = useVirtualMachines();
    const { departmentDropdownList } = useDepartment();
    const { operatingSystemDropdownList } = useOperatingSystem();

    useEffect(() => {
        departmentDropdownList.fetch({});
        operatingSystemDropdownList.fetch({});
    }, []);

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
        [data, departmentDropdownList.data, operatingSystemDropdownList.data]
    );

    // const handleFormSubmit = (formData) => {
    //     const updatedFormData = {
    //         ...formData,
    //         runningServices: [
    //             {
    //                 serviceName: formData?.serviceName || "",
    //                 port: formData?.port || 0,
    //             },
    //         ],
    //         snapshots: [
    //             {
    //                 snapshotName: formData?.snapshotName || "",
    //                 date: formData?.snapshotDate || "",
    //             },
    //         ],
    //     };

    //     virtualMachineCreation.execute({
    //         payload: updatedFormData,
    //         onSuccess: () => {
    //             onCancel?.();
    //         },
    //         options: {
    //             showNotification: true,
    //         },
    //     });
    // };

    const operation = data?.inventoryId ? virtualMachineUpdation : virtualMachineCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?.inventoryId && { id: data.inventoryId }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: operation.isLoading, virtualMachineInfoFormErrors: operation.errorMessages };
};
