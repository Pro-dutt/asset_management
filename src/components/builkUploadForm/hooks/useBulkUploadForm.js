import { useFileUpload } from "@/services/hooks/fileUpload";
import { useMemo } from "react";

const useBulkFileUpload = (module, onClose) => {
    const { fileUpload } = useFileUpload();
    const handleFormSubmit = async (formData) => {
        await fileUpload.execute({
            url: `/bulkUpload/${module.name.replace(/\s+/g, "-")}`,
            payload: {
                file: formData.file,
            },
            options: {
                showNotification: true,
                onProgress: (percentage) => {
                    console.log(`Upload progress: ${percentage}%`);
                },
            },
            onSuccess: (data) => {
                console.log("Upload successful:", data);
                module.onSuccess?.();
            },
            onError: (error) => {
                console.log("Upload failed:", error);
            },
        });
    };

    const formConfig = useMemo(
        () => [
            {
                type: "file",
                name: "file",
                multiple: false,
                label: "Upload File [CSV or EXCEL]",
                grid: 1,
                validationRules: {
                    required: true,
                },
                accept: ["xls", "xlsx"],
                validateOnChange: true,
            },
        ],
        []
    );
    return {
        formConfig,
        isLoading: fileUpload.isLoading,
        handleFormSubmit,
        formErrors: [],
        formSuccess: fileUpload.successMessages,
    };
};
export default useBulkFileUpload;
