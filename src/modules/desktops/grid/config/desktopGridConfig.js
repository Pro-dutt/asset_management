import GlobalICONS from "@/lib/utils/icons";
import globalConstants from "@/lib/utils/contants";
import { statusWiseData } from "../utils/gridUtils";

const desktopGridConfig = (rowsData) => {
    const columns = {
        "In-Store": {
            id: globalConstants.STATUS_CATEGORIES.getLabel("IN_STORE"),
            data: statusWiseData(rowsData, globalConstants.STATUS_CATEGORIES.getLabel("IN_STORE")),
            title: "In Store",
            color: "var(--orange-color)",
            bgColor: "var(--orange-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
        "In-Use": {
            id: globalConstants.STATUS_CATEGORIES.getLabel("IN_USE"),
            data: statusWiseData(rowsData, globalConstants.STATUS_CATEGORIES.getLabel("IN_USE")),
            title: "In Use",
            color: "var(--green-color)",
            bgColor: "var(--green-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
        "In-Maintenance": {
            id: globalConstants.STATUS_CATEGORIES.getLabel("IN_MAINTENANCE"),
            data: statusWiseData(rowsData, globalConstants.STATUS_CATEGORIES.getLabel("IN_MAINTENANCE")),
            title: "In Maintenance",
            color: "var(--blue-color)",
            bgColor: "var(--blue-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
        Disposed: {
            id: globalConstants.STATUS_CATEGORIES.getLabel("DISPOSED"),
            data: statusWiseData(rowsData, globalConstants.STATUS_CATEGORIES.getLabel("DISPOSED")),
            title: "Disposed",
            color: "var(--red-color)",
            bgColor: "var(--red-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
        Missing: {
            id: globalConstants.STATUS_CATEGORIES.getLabel("MISSING"),
            data: statusWiseData(rowsData, globalConstants.STATUS_CATEGORIES.getLabel("MISSING")),
            title: "Missing",
            color: "var(--violet-color)",
            bgColor: "var(--violet-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
        Reserved: {
            id: globalConstants.STATUS_CATEGORIES.getLabel("RESERVED"),
            data: statusWiseData(rowsData, globalConstants.STATUS_CATEGORIES.getLabel("RESERVED")),
            title: "Reserved",
            color: "var(--pink-color)",
            bgColor: "var(--pink-light-color)",
            icon: GlobalICONS.PROCUREMENT,
            cards: [],
        },
    };

    return columns;
};

export default desktopGridConfig;
