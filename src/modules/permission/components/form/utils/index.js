import DetailsUtils from "@/components/details/utils";

class PermissionUtils {
    static formatRoutesForDropdownList(data) {
        return data.map((item) => ({ label: `${DetailsUtils.formatText(item.label || "")}  [${item.path}]`, value: item._id }));
    }
}

export default PermissionUtils;
