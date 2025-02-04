import { useMemo } from "react";
import AddAssetsOptions from "../components/AddAssetsOption";

const useContent = (form, module, setForm) => {
    const content = useMemo(() => {
        switch (form) {
            case "manualForm":
                return module.form;
            default:
                return <AddAssetsOptions module={module} setForm={setForm} />;
        }
    }, [form, module, setForm]);

    return { content };
};

export default useContent;
