const sampleAssetsClassificationData = {
    totalAssets: 380,
    hardware: {
        totalCount: 310,
        itAssets: {
            totalCount: 160,
            data: [
                { name: "desktop", count: 80, adIntegrationPending: 60, agentInstallationPending: 50, compliance: 70 },
                { name: "laptop", count: 50, adIntegrationPending: 30, agentInstallationPending: 25, compliance: 40 },
                { name: "server", count: 20, adIntegrationPending: 15, agentInstallationPending: 10, compliance: 15 },
                { name: "NwkD", count: 10, agentInstallationPending: 8, agentInstallationPending: 5, compliance: 8 },
                { name: "firewall", count: 5, agentInstallationPending: 3, agentInstallationPending: 2, compliance: 3 },
            ],
        },
        otAssets: {
            totalCount: 150,
            data: [
                { name: "otPlc", count: 70, adIntegration: 50, agentInstall: 40, compliance: 55 },
                { name: "otHmi", count: 40, adIntegration: 25, agentInstall: 20, compliance: 30 },
                // { name: "SPDevices", count: 20, adIntegration: 15, agentInstall: 10, compliance: 18 },
                { name: "switches", count: 15, adIntegration: 10, agentInstall: 8, compliance: 12 },
                // { name: "industrialComputers", count: 3, adIntegration: 2, agentInstall: 1, compliance: 2 },
                { name: "otOthers", count: 2, adIntegration: 1, agentInstall: 1, compliance: 1 },
            ],
        },
    },
    software: {
        totalCount: 45,
        licences: {
            totalCount: 20,
            data: [
                { name: "usedLicences", count: 10, adIntegration: 8, agentInstall: 6, compliance: 8 },
                { name: "expiredLicenecs", count: 5, adIntegration: 3, agentInstall: 2, compliance: 4 },
                { name: "expiryInLessThan15Days", count: 5, adIntegration: 4, agentInstall: 3, compliance: 3 },
            ],
        },
        webApplications: {
            totalCount: 25,
            data: [
                { name: "publicFacing", count: 12, adIntegration: 10, agentInstall: 9, compliance: 10 },
                { name: "backupPending", count: 8, adIntegration: 5, agentInstall: 4, compliance: 6 },
                { name: "vaptPending", count: 3, adIntegration: 2, agentInstall: 2, compliance: 2 },
                { name: "webAssets", count: 2, adIntegration: 1, agentInstall: 1, compliance: 1 },
            ],
        },
    },
    dataCenter: {
        totalCount: 25,
        vmAssets: {
            totalCount: 25,
            data: [
                { name: "vmProd", count: 15, adIntegration: 12, agentInstall: 10, compliance: 12 },
                { name: "vmDevelopment", count: 7, adIntegration: 5, agentInstall: 4, compliance: 5 },
                { name: "vmStaging", count: 3, adIntegration: 2, agentInstall: 1, compliance: 2 },
            ],
        },
    },
};

export default sampleAssetsClassificationData;
