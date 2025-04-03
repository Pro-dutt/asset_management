import TableUtils from "@/components/table/utils";
import desktopsTableConstants from "./constants";
import DetailsUtils from "@/components/details/utils";

class RoutesTableUtils {
    static tableHeader({ data, styles }) {
        const autoSuggestionData = TableUtils.formatDataForAutoSuggestion(data.data || [], ["path", "method", "label"]);
        return {
            limit: desktopsTableConstants.TABLE_LIMITS,
            filters: [
                {
                    type: "text",
                    name: "searchText",
                    grid: 2,
                    placeholder: "Search routes",
                    autoSuggestion: {
                        initialData: autoSuggestionData,
                        autoSuggestionUrl: "/api/suggestions",
                        minChars: 1,
                        maxSuggestions: 5,
                    },
                    className: styles.search_field,
                },
            ],
        };
    }

    static tableRow(data = { data: [] }) {
        return data?.data?.map((item) => ({
            Id: { key: "id", value: item._id, type: "hidden" },
            Controller: { key: "label", value: DetailsUtils.formatText(item.label) },
            Path: { key: "path", value: item.path },
            Method: { key: "method", value: item.method },
        }));
    }

    static tablePagination(data) {
        return {
            totalPage: data.totalPages || "0",
            totalItemCount: data.totalDocuments || "0",
        };
    }
}
export default RoutesTableUtils;
