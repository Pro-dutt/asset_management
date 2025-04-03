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
import { AuthProvider } from "./auth";
import { PermissionProvider } from "./permission";
import { RouteProvider } from "./route";
import { RoleProvider } from "./role";
import { UsersProvider } from "./users";
import { TenantProvider } from "./tenant";
import { DepartmentProvider } from "./department";
import { DesignationProvider } from "./designation";
import { OperatingSystemProvider } from "./operatingSystem";
import { DeviceCategoryProvider } from "./deviceCategory";
import { DeviceStateProvider } from "./deviceState";

const ContextProviders = ({ children }) => {
    return (
        <ThemeProvider>
            <LoadingProvider>
                <NotificationProvider>
                    <RouteProvider>
                        <PermissionProvider>
                            <RoleProvider>
                                <UsersProvider>
                                    <AuthProvider>
                                        <TenantProvider>
                                            <LaptopProvider>
                                                <DesktopProvider>
                                                    <VirtualMachinesProvider>
                                                        <WebApplicationProvider>
                                                            <NetworkDeviceProvider>
                                                                <ServerProvider>
                                                                    <StatsProvider>
                                                                        <ChartsProvider>
                                                                            <DepartmentProvider>
                                                                                <DesignationProvider>
                                                                                    <OperatingSystemProvider>
                                                                                        <DeviceCategoryProvider>
                                                                                            <DeviceStateProvider>
                                                                                                <EndPointsProvider>{children}</EndPointsProvider>
                                                                                            </DeviceStateProvider>
                                                                                        </DeviceCategoryProvider>
                                                                                    </OperatingSystemProvider>
                                                                                </DesignationProvider>
                                                                            </DepartmentProvider>
                                                                        </ChartsProvider>
                                                                    </StatsProvider>
                                                                </ServerProvider>
                                                            </NetworkDeviceProvider>
                                                        </WebApplicationProvider>
                                                    </VirtualMachinesProvider>
                                                </DesktopProvider>
                                            </LaptopProvider>
                                        </TenantProvider>
                                    </AuthProvider>
                                </UsersProvider>
                            </RoleProvider>
                        </PermissionProvider>
                    </RouteProvider>
                </NotificationProvider>
            </LoadingProvider>
        </ThemeProvider>
    );
};
export default ContextProviders;
