import DataNotFound from "@/components/DataNotFound";
import GlobalICONS from "@/lib/utils/icons";
import { useMemo } from "react";
import sampleRolesDetails from "../utils/seeds";
import globalConstants from "@/lib/utils/contants";
import desktopConstants from "../../form/utils/constants";
import styles from "../styles/index.module.css";
import DetailsUtils from "@/components/details/utils";

const useRolesDetails = (data = sampleRolesDetails) => {
    const roleDetailsConfig = useMemo(
        () => [
            {
                customBody: <PermissionsTable permissions={data?.permissions} />,
                grid: 1,
            },
        ],
        [data]
    );
    console.log(data);
    return {
        roleDetailsConfig,
    };
};

const PermissionsTable = ({ permissions }) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.headerRow}>
                        <th className={styles.cell}>Permission Name</th>
                        <th className={styles.cell}>Routes</th>
                    </tr>
                </thead>
                <tbody>
                    {permissions.map((perm) => (
                        <tr key={perm._id} className={styles.row}>
                            <td className={styles.cell}>{perm.name}</td>
                            <td className={styles.cell}>
                                <div className={styles.routes_container}>
                                    {perm.routes.map((route) => (
                                        <div>
                                            <p>{`${DetailsUtils.formatText(route.label || "")}  [${route.path}]`}</p>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default useRolesDetails;
