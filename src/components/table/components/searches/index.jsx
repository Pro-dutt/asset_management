import React, { useState } from "react";
import styles from "./index.module.css";
import SelectField from "@/components/form/components/FieldTemplates/SelectField";
import InputField from "@/components/form/components/FieldTemplates/InputField";
import Button from "@/components/form/components/FieldTemplates/ButtonField";
import ICON, { TableIcon } from "../../utils/icon";
import DynamicForm from "@/components/form";

const TableSearch = ({ showDataViewButton, dataView, setDataView, data, initialValues, router, searchParams }) => {
    const [formValues, setFormValues] = useState(initialValues);

    const setQueryParam = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.replace(`?${params.toString()}`);
    };
    const generateOptions = (limitConfig) => {
        const options = [];
        const start = parseInt(limitConfig?.limitStart || 10, 10);
        const end = parseInt(limitConfig?.limitEnd || 50, 10);
        const step = parseInt(limitConfig?.multipleOf || 10, 10);

        for (let i = start; i <= end; i += step) {
            options.push({ label: i.toString(), value: i.toString() });
        }

        return options;
    };

    const getFormData = (data) => {
        return data.filters?.map((item) => ({
            ...item,
            clearOption: true,
            customOnChange: (event) => {
                const { name, value } = event.target;
                setFormValues((prev) => ({ ...prev, [name]: value }));
                setQueryParam(name, value);
            },
            defaultValue: formValues?.[item.name],
            inputStyle: { paddingBlock: "0.65rem", marginTop: "0.1rem" },
        }));
    };

    return (
        <div className={styles.container}>
            <div>
                {data.limit && (
                    <SelectField
                        formField={{
                            id: "limit",
                            name: "limit",
                            options: generateOptions(data.limit),
                            defaultValue: formValues?.["limit"] || data.limit?.defaultValue || "10",
                            onChange: (event) => {
                                const { name, value } = event.target;
                                setFormValues((prev) => ({ ...prev, [name]: value }));
                                setQueryParam(name, value);
                            },
                        }}
                    />
                )}
            </div>

            <div>
                <DynamicForm formData={getFormData(data)} formButtons={[]} />
                {data?.actionButtons?.map((button) => (
                    <Button
                        key={button.label}
                        onClick={button.onClick}
                        variant={button.variant}
                        flat={button.flat}
                        className={`${styles?.[button.label?.toLowerCase()]} ${button.className}`}
                        icon={button.icon}
                        href={button.href}
                        target={button.target}
                    >
                        {button.label}
                    </Button>
                ))}
                {showDataViewButton && (
                    <Button
                        key={"data-view"}
                        onClick={() => {
                            setDataView((prev) => {
                                if (prev.table) {
                                    return { kanban: true };
                                } else {
                                    return { table: true, kanban: false };
                                }
                            });
                        }}
                        tonal={true}
                        icon={dataView.table ? TableIcon.KANBAN : TableIcon.TABLE}
                        iconOnly={true}
                        tooltip={dataView.table ? "Kanban View" : "Table View"}
                    >
                        {dataView.table ? "Kanban View" : "Table View"}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default TableSearch;
