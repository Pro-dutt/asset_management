import { NotificationProvider } from "./notification";
import { LoadingProvider } from "./loading";
import { EndPointsProvider } from "./sampleEndPoints";

const ContextProviders = ({ children }) => {
    return (
        <LoadingProvider>
            <NotificationProvider>
                <EndPointsProvider>{children}</EndPointsProvider>
            </NotificationProvider>
        </LoadingProvider>
    );
};
export default ContextProviders;
