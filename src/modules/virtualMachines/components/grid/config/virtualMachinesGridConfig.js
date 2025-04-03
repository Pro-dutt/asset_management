import GlobalICONS from "@/lib/utils/icons";
import { statusWiseData } from "../utils/gridUtils";
import virtualMachineConstants from "../../form/utils/constants";

const virtualMachinesGridConfig = (rowsData) => {
    const columns = {
        Running: {
            id: virtualMachineConstants.STATUS.getLabel("RUNNING"),
            data: statusWiseData(rowsData, virtualMachineConstants.STATUS.getLabel("RUNNING")),
            title: "Running",
            color: "var(--green-color)",
            bgColor: "var(--green-light-color)",
            icon: GlobalICONS.RUNNING,
            cards: [],
        },
        Stopped: {
            id: virtualMachineConstants.STATUS.getLabel("STOPPED"),
            data: statusWiseData(rowsData, virtualMachineConstants.STATUS.getLabel("STOPPED")),
            title: "Stopped",
            color: "var(--orange-color)",
            bgColor: "var(--orange-light-color)",
            icon: GlobalICONS.STOPPED,
            cards: [],
        },
        Suspended: {
            id: virtualMachineConstants.STATUS.getLabel("SUSPENDED"),
            data: statusWiseData(rowsData, virtualMachineConstants.STATUS.getLabel("SUSPENDED")),
            title: "Suspended",
            color: "var(--red-color)",
            bgColor: "var(--red-light-color)",
            icon: GlobalICONS.SUSPENDED,
            cards: [],
        },
    };

    return columns;
};

export default virtualMachinesGridConfig;
