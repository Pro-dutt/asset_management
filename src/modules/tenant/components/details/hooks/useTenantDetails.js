import DataNotFound from "@/components/DataNotFound";
import GlobalICONS from "@/lib/utils/icons";
import { useMemo } from "react";
import sampleTenantDetails from "../utils/seeds";
import globalConstants from "@/lib/utils/contants";
import desktopConstants from "../../form/utils/constants";

const useTenantDetails = (data = sampleTenantDetails) => {
    const tenantDetailsConfig = useMemo(
        () => [
            {
                heading: {
                    label: "Tenant Details",
                    icon: GlobalICONS.DESKTOP,
                    description: "Details of the tenant",
                },
                body: {
                    id: data._id,
                    name: data.name,
                    address: data.address,
                    country: data.country,
                    state: data.state,
                    pincode: data.pincode,
                    contact: data.contact,
                    email: data.email,
                    remarks: data.remarks,
                },
                grid: 3,
            },
        ],
        [data]
    );
    //console.log(data);
    return {
        tenantDetailsConfig,
    };
};

export default useTenantDetails;
