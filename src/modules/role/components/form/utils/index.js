class RoleUtils {
    static formatPermissionForDropdownList(data) {
        return data.map((item) => ({ label: item.name, value: item._id }));
    }
}

export default RoleUtils;
