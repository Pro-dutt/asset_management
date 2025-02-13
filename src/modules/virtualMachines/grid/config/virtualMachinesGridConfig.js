import GlobalICONS from "@/lib/utils/icons";
import globalConstants from "@/lib/utils/contants";
import { statusWiseData } from "../utils/gridUtils";
import virtualMachineConstants from "../../components/form/utils/constants";

const virtualMachinesGridConfig = (rowsData) => {
    const columns = {
        Running: {
            id: virtualMachineConstants.STATUS.getLabel("RUNNING"),
            data: statusWiseData(rowsData, virtualMachineConstants.STATUS.getLabel("RUNNING")),
            title: "Running",
            color: "var(--orange-color)",
            bgColor: "var(--orange-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
        Stopped: {
            id: virtualMachineConstants.STATUS.getLabel("STOPPED"),
            data: statusWiseData(rowsData, virtualMachineConstants.STATUS.getLabel("STOPPED")),
            title: "Stopped",
            color: "var(--green-color)",
            bgColor: "var(--green-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
        Suspended: {
            id: virtualMachineConstants.STATUS.getLabel("SUSPENDED"),
            data: statusWiseData(rowsData, virtualMachineConstants.STATUS.getLabel("SUSPENDED")),
            title: "Suspended",
            color: "var(--blue-color)",
            bgColor: "var(--blue-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
    };

    return columns;
};

export default virtualMachinesGridConfig;
