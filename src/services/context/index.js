import { NotificationProvider } from "./notification";
import { LoadingProvider } from "./loading";
import { EndPointsProvider } from "./sampleEndPoints";
import { VirtualMachinesProvider } from "./virtualMachines";
import { WebApplicationProvider } from "./webApplication";
import { NetworkDeviceProvider } from "./networkDevice";
import { DataCenterProvider } from "./dataCenter";

const ContextProviders = ({ children }) => {
    return (
        <LoadingProvider>
            <NotificationProvider>
                <VirtualMachinesProvider>
                    <WebApplicationProvider>
                        <NetworkDeviceProvider>
                            <DataCenterProvider>
                                <EndPointsProvider>{children}</EndPointsProvider>
                            </DataCenterProvider>
                        </NetworkDeviceProvider>
                    </WebApplicationProvider>
                </VirtualMachinesProvider>
            </NotificationProvider>
        </LoadingProvider>
    );
};
export default ContextProviders;
