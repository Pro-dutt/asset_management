import { NotificationProvider } from "./notification";
import { LoadingProvider } from "./loading";
import { EndPointsProvider } from "./sampleEndPoints";
import { VirtualMachinesProvider } from "./virtualMachines";
import { WebApplicationProvider } from "./webApplication";
import { NetworkDeviceProvider } from "./networkDevice";

const ContextProviders = ({ children }) => {
    return (
        <LoadingProvider>
            <NotificationProvider>
                <VirtualMachinesProvider>
                    <WebApplicationProvider>
                        <NetworkDeviceProvider>
                            <EndPointsProvider>{children}</EndPointsProvider>
                        </NetworkDeviceProvider>
                    </WebApplicationProvider>
                </VirtualMachinesProvider>
            </NotificationProvider>
        </LoadingProvider>
    );
};
export default ContextProviders;
