export const mapTableRow = (item) => ({
    Id: { key: "_id", value: item._id, type: "hidden" },
    "Asset ID": { key: "Asset ID", value: item["Asset ID"] },
    "Product Name": { key: "Product Name", value: item["Product Name"] },
    Model: { key: "Model", value: item.Model },
    "Serial Number": { key: "Serial Number", value: item["Serial Number"] },
    Processor: { key: "Processor", value: item.Processor },
    "RAM (GB)": { key: "RAM (GB)", value: item["RAM (GB)"] },
    "Device Status": { key: "Device Status", value: item["Device Status"] },
});
