export const statusWiseData = (rowsData, statusName) => {
    console.log("under statuses", rowsData);
    return rowsData?.filter((row) => {
        const statusKey = Object.keys(row).find((key) => row[key].key === "statusName");
        return statusKey && row[statusKey]?.value === statusName;
    });
};
