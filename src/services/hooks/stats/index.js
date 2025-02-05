import StatsApiService from "@/services/api/stats";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const useStatsCount = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const [stats, setStats] = useState({});
    const { isLoading, setLoading } = useLoading();

    let GET_STATS_KEY = apiConstants.loadingStateKeys.GET_STATS;

    const executeStatsCount = useCallback(
        async ({ params, onSuccess, onError, options }) => {
            GET_STATS_KEY += params.module;
            setLoading(GET_STATS_KEY, true);
            const controller = new AbortController();

            try {
                const data = await StatsApiService.getStats(params, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: GET_STATS_KEY,
                        value: data,
                    });
                }
                setStats(data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: GET_STATS_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.(error);
                throw error;
            } finally {
                setLoading(GET_STATS_KEY, false);
                return () => controller.abort();
            }
        },
        [GET_STATS_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        statsCount: {
            execute: executeStatsCount,
            data: stats.data,
            isLoading: isLoading(GET_STATS_KEY) || false,
            successMessages: successMessages?.[GET_STATS_KEY],
            errorMessages: errorMessages?.[GET_STATS_KEY],
        },
    };
};
