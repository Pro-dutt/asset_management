import React, { useState, useMemo } from "react";
import styles from "./styles/index.module.css";
import Table from "@/components/table";
import Modal from "@/components/Popup/Popup";
import VirtualMachine from "@/modules/VirtualMachines";
import GlobalICONS from "@/lib/utils/icons";
import desktopsTableConstants from "./utils/constants";
import DesktopsTableUtils from "./utils";
import "./styles/index.css";
import Details from "../details";

const EndPointsTable = () => {
    const [show, setShow] = useState({});
    const [desktopDetails, setDesktopDetails] = useState(null);

    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const getTableData = (data) => ({
        rows: DesktopsTableUtils.tableRow(data),
        actionData: DesktopsTableUtils.tableActionData({ data, setShow, setDesktopDetails }),
        url: desktopsTableConstants.TABLE_API_URL,
        pagination: DesktopsTableUtils.tablePagination,
        sorting: desktopsTableConstants.TABLE_SORTING,
        getTableData,
        rowClickHandler: (row) => console.log(row),
        externalFilters: desktopsTableConstants.externalFilters,
        tableHeader: DesktopsTableUtils.tableHeader({ data, setShow, styles }),
        checkbox: true,
    });

    const tableData = useMemo(() => getTableData({}), []);

    return (
        <div className={styles.container}>
            {<Table tableData={tableData} />}

            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Desktop"}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new desktop"
            >
                <VirtualMachine />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Desktop Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new desktop"
            >
                <VirtualMachine data={desktopDetails} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={"Desktop Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new desktop"
            >
                <Details data={desktopDetails} />
            </Modal>
        </div>
    );
};

export default EndPointsTable;
