import { NotificationProvider } from "./notification";
import { LoadingProvider } from "./loading";
import { EndPointsProvider } from "./sampleEndPoints";
import { VirtualMachinesProvider } from "./virtualMachines";

const ContextProviders = ({ children }) => {
    return (
        <LoadingProvider>
            <NotificationProvider>
                <VirtualMachinesProvider>
                    <EndPointsProvider>{children}</EndPointsProvider>
                </VirtualMachinesProvider>
            </NotificationProvider>
        </LoadingProvider>
    );
};
export default ContextProviders;
