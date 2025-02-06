import { NotificationProvider } from "./notification";
import { LoadingProvider } from "./loading";
import { EndPointsProvider } from "./sampleEndPoints";
import { VirtualMachinesProvider } from "./virtualMachines";
import { WebApplicationProvider } from "./webApplication";
import { NetworkDeviceProvider } from "./networkDevice";
import { ServerProvider } from "./server";
import { DesktopProvider } from "./desktop";
import { StatsProvider } from "./stats";
import { ChartsProvider } from "./charts";
import { ThemeProvider } from "./ThemeContext";
import { LaptopProvider } from "./laptop";

const ContextProviders = ({ children }) => {
    return (
        <ThemeProvider>
            <LoadingProvider>
                <NotificationProvider>
                    <LaptopProvider>
                        <DesktopProvider>
                            <VirtualMachinesProvider>
                                <WebApplicationProvider>
                                    <NetworkDeviceProvider>
                                        <ServerProvider>
                                            <StatsProvider>
                                                <ChartsProvider>
                                                    <EndPointsProvider>{children}</EndPointsProvider>
                                                </ChartsProvider>
                                            </StatsProvider>
                                        </ServerProvider>
                                    </NetworkDeviceProvider>
                                </WebApplicationProvider>
                            </VirtualMachinesProvider>
                        </DesktopProvider>
                    </LaptopProvider>
                </NotificationProvider>
            </LoadingProvider>
        </ThemeProvider>
    );
};
export default ContextProviders;
