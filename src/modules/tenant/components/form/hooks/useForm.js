import { useMemo } from "react";
import { useTenant } from "@/services/context/tenant";

export const useTenantInfoForm = (data = {}, onSuccess) => {
    const { tenantCreation, tenantUpdation } = useTenant();

    const formConfig = useMemo(
        () => [
            {
                type: "text",
                name: "name",
                label: "Tenant Name",
                placeholder: "Tenant name",
                grid: 2,
                defaultValue: data?.name,
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "address",
                label: "Address",
                placeholder: "Address",
                grid: 2,
                defaultValue: data?.address,
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "country",
                label: "Country",
                placeholder: "Country",
                grid: 2,
                defaultValue: data?.country,
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "state",
                label: "State",
                placeholder: "State",
                grid: 2,
                defaultValue: data?.state,
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "number",
                name: "pincode",
                label: "Pincode",
                placeholder: "Pincode",
                grid: 2,
                defaultValue: data?.pincode,
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "contact",
                name: "contact",
                label: "Contact",
                placeholder: "Contact",
                grid: 2,
                defaultValue: data?.contact,
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "email",
                name: "email",
                label: "Email",
                placeholder: "Email",
                grid: 2,
                defaultValue: data?.email,
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "status",
                label: "Tenant status",
                placeholder: "tenant status",
                grid: 2,
                defaultValue: data?.status,
                options: [
                    { label: "Active", value: "active" },
                    { label: "Inactive", value: "inactive" },
                ],
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "remarks",
                label: "Remarks",
                placeholder: "Remarks",
                grid: 2,
                defaultValue: data?.remarks,
                validationRules: {},
                validateOnChange: true,
            },
        ],
        [data]
    );

    const operation = data?._id ? tenantUpdation : tenantCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?._id && { id: data._id }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, TenantInfoFormErrors: operation?.errorMessages };
};
