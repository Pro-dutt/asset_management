import GlobalICONS from "@/lib/utils/icons";
import globalConstants from "@/lib/utils/contants";
import { statusWiseData } from "../utils/gridUtils";
import webApplicationConstants from "../../components/form/utils/constants";

const webApplicationsGridConfig = (rowsData) => {
    const columns = {
        Active: {
            id: webApplicationConstants.STATUS.getLabel("ACTIVE"),
            data: statusWiseData(rowsData, webApplicationConstants.STATUS.getLabel("ACTIVE")),
            title: "Active",
            color: "var(--orange-color)",
            bgColor: "var(--orange-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
        Inactive: {
            id: webApplicationConstants.STATUS.getLabel("INACTIVE"),
            data: statusWiseData(rowsData, webApplicationConstants.STATUS.getLabel("INACTIVE")),
            title: "Inactive",
            color: "var(--green-color)",
            bgColor: "var(--green-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
        "Under-Maintenance": {
            id: webApplicationConstants.STATUS.getLabel("UNDER_MAINTENANCE"),
            data: statusWiseData(rowsData, webApplicationConstants.STATUS.getLabel("UNDER_MAINTENANCE")),
            title: "Under Maintenance",
            color: "var(--blue-color)",
            bgColor: "var(--blue-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
        Decomissioned: {
            id: webApplicationConstants.STATUS.getLabel("DECOMISSIONED"),
            data: statusWiseData(rowsData, webApplicationConstants.STATUS.getLabel("DECOMISSIONED")),
            title: "Decomissioned",
            color: "var(--red-color)",
            bgColor: "var(--red-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
    };

    return columns;
};

export default webApplicationsGridConfig;
