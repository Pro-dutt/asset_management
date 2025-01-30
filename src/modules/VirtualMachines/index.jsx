const { VirtualMachineInfoForm } = require("./components/Form");
const { useVirtualMachineInfoForm } = require("./hooks/useForm");

const VirtualMachine = () => {
    return (
        <div>
            <VirtualMachineInfoForm />
        </div>
    );
};

export default VirtualMachine;
