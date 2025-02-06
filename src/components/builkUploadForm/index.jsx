import React from "react";
import styles from "./styles/index.module.css";
import useBulkFileUpload from "./hooks/useBulkUploadForm";
import DynamicForm from "../form";
import GlobalUtils from "@/lib/utils";

const BulkUploadForm = ({ onCancel, module = { name: "desktop" } }) => {
    const { formConfig, isLoading, handleFormSubmit, formErrors, formSuccess } = useBulkFileUpload(module, onCancel);

    return (
        <div className={styles.container}>
            <DynamicForm
                key={"bulk-file-upload"}
                formId="bulk-file"
                formData={formConfig}
                onSubmit={handleFormSubmit}
                responseErrors={formErrors}
                formButtons={GlobalUtils.getFormButtons(isLoading, onCancel)}
            />
        </div>
    );
};

export default BulkUploadForm;
