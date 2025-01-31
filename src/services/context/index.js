import { NotificationProvider } from "./notification";
import { LoadingProvider } from "./loading";
import { EndPointsProvider } from "./sampleEndPoints";
import { VirtualMachinesProvider } from "./virtualMachines";
import { WebApplicationProvider } from "./webApplication";

const ContextProviders = ({ children }) => {
    return (
        <LoadingProvider>
            <NotificationProvider>
                <VirtualMachinesProvider>
                    <WebApplicationProvider>
                        <EndPointsProvider>{children}</EndPointsProvider>
                    </WebApplicationProvider>
                </VirtualMachinesProvider>
            </NotificationProvider>
        </LoadingProvider>
    );
};
export default ContextProviders;
