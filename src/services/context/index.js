import { NotificationProvider } from "./notification";
import { LoadingProvider } from "./loading";
import { EndPointsProvider } from "./sampleEndPoints";
import { VirtualMachinesProvider } from "./virtualMachines";
import { WebApplicationProvider } from "./webApplication";
import { NetworkDeviceProvider } from "./networkDevice";
import { ServerProvider } from "./server";
import { DesktopProvider } from "./desktop";

const ContextProviders = ({ children }) => {
    return (
        <LoadingProvider>
            <NotificationProvider>
                <DesktopProvider>
                    <VirtualMachinesProvider>
                        <WebApplicationProvider>
                            <NetworkDeviceProvider>
                                <ServerProvider>
                                    <EndPointsProvider>{children}</EndPointsProvider>
                                </ServerProvider>
                            </NetworkDeviceProvider>
                        </WebApplicationProvider>
                    </VirtualMachinesProvider>
                </DesktopProvider>
            </NotificationProvider>
        </LoadingProvider>
    );
};
export default ContextProviders;
