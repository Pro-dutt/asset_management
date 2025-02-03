import axios from "axios";

class GlobalUtils {
    static capitalizeEachWord = (name) => {
        if (name && typeof name === "string") {
            return name.replace(/\b\w/g, (match) => match.toUpperCase());
        } else {
            return "";
        }
    };

    static getCurrentMonthName() {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const currentDate = new Date();
        const currentMonthIndex = currentDate.getMonth();
        return monthNames[currentMonthIndex];
    }

    static getFormattedDate = (timestamp) => {
        const dateObj = new Date(timestamp * 1000);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();

        if (day < 10) {
            day = "0" + day;
        }

        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    };

    static getFormattedDateWithTime = (timestamp) => {
        const dateObj = new Date(timestamp * 1000);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();

        if (day < 10) {
            day = "0" + day;
        }

        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        const formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;
        return formattedDate;
    };

    static handleViewFile = async (fileUrl) => {
        try {
            const response = await axios.get(fileUrl, {
                responseType: "blob",
            });

            const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers["content-type"] }));
            window.open(url);

            setTimeout(() => {
                window.URL.revokeObjectURL(url);
            }, 1000);
        } catch (error) {
            console.error("View failed:", error);
        }
    };

    static appendTokenToUrl = (url, token) => {
        if (!url) return null;
        const hasQueryParams = url.includes("?");
        return `${url}${hasQueryParams ? "&" : "?"}token=${token}`;
    };

    static getToken() {
        return process.env.REACT_APP_EXPORT_TOKEN;
    }

    static formatDateForDateInput = (dateString) => {
        if (!dateString) {
            return "";
        }

        const parts = dateString.split("-");
        return `${parts[2]}-${parts[0]}-${parts[1]}`;
    };

    static renderJson = (json, primaryColor, secondaryColor, fontWeight) => {
        const formatJson = (obj) => {
            const entries = Array.isArray(obj) ? obj.map((value, index) => [index, value]) : Object.entries(obj);

            return entries.map(([key, value]) => {
                const isObject = value && typeof value === "object";
                const isArray = Array.isArray(value);
                const displayValue = isArray ? value : JSON.stringify(value);

                return (
                    <div key={key} style={{ marginBottom: "10px" }}>
                        <span style={{ color: primaryColor || "#ff9800", fontWeight: fontWeight || "bold" }}>{key}: </span>
                        {isObject && !isArray ? (
                            <div style={{ paddingLeft: "20px" }}>{formatJson(value)}</div>
                        ) : (
                            <span style={{ color: secondaryColor || "#4caf50", wordBreak: "break-all" }}>{isArray ? displayValue : displayValue}</span>
                        )}
                    </div>
                );
            });
        };

        return formatJson(json);
    };

    static isDateInFuture(timestamp) {
        const dueDate = new Date(timestamp * 1000);

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (dueDate < today) {
            const diffTime = today - dueDate;
            const overdueDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
            return { exceeded: true, overdueDays: overdueDays };
        }
        return { exceeded: false, overdueDays: 0 };
    }

    /**
     * Utility to detect meaningful changes between form payload and existing data
     * Includes deep comparison, type coercion handling, and performance optimizations
     *
     * @param {Object} payload - New form data
     * @param {Object} existingData - Original data to compare against
     * @param {Object} options - Configuration options
     * @returns {boolean} - Returns true if there are meaningful changes
     */

    static hasFormChanges(payload, existingData, options = {}) {
        const {
            ignoreKeys = [], // Keys to exclude from comparison
            targetKeys = [], // Specific keys to compare (if empty, compare all keys)
            trimStrings = true, // Trim strings before comparison
            ignoreEmptyValues = true, // Ignore null/undefined/empty string differences
            precisionForNumbers = 2, // Decimal precision for number comparison
            ignoreKeyOrder = true, // Ignore object key order differences
        } = options;

        // Early return for identical references
        if (payload === existingData) return false;

        // Handle null/undefined cases
        if (!payload || !existingData) return payload !== existingData;

        // Create normalized copies to avoid modifying original data
        const normalizeValue = (value) => {
            if (typeof value === "string" && trimStrings) {
                value = value.trim();
                return ignoreEmptyValues && value === "" ? null : value;
            }
            if (typeof value === "number" && isFinite(value)) {
                return Number(value.toFixed(precisionForNumbers));
            }
            return value;
        };

        const normalizeObject = (obj, keysToCompare = null) => {
            const normalized = {};
            let keys = ignoreKeyOrder ? Object.keys(obj).sort() : Object.keys(obj);

            // Filter keys based on targetKeys if provided
            if (keysToCompare) {
                keys = keys.filter((key) => keysToCompare.includes(key));
            }

            for (const key of keys) {
                if (ignoreKeys.includes(key)) continue;

                const value = obj[key];

                // Skip empty values if configured
                if (ignoreEmptyValues && (value === null || value === undefined || value === "")) {
                    continue;
                }

                if (Array.isArray(value)) {
                    normalized[key] = value.map((item) => (typeof item === "object" && item !== null ? normalizeObject(item) : normalizeValue(item)));
                } else if (typeof value === "object" && value !== null) {
                    normalized[key] = normalizeObject(value);
                } else {
                    normalized[key] = normalizeValue(value);
                }
            }

            return normalized;
        };

        // Determine which keys to compare
        const keysToCompare = targetKeys.length > 0 ? targetKeys : Object.keys(payload);

        // Normalize both objects with the same set of keys
        const normalizedPayload = normalizeObject(payload);
        const normalizedExisting = normalizeObject(existingData, keysToCompare);

        // Use fast-deep-equal for performance
        const isEqual = (obj1, obj2) => {
            if (obj1 === obj2) return true;

            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);

            if (keys1.length !== keys2.length) return false;

            for (const key of keys1) {
                const val1 = obj1[key];
                const val2 = obj2[key];

                if (typeof val1 === "object" && val1 !== null && typeof val2 === "object" && val2 !== null) {
                    if (!isEqual(val1, val2)) return false;
                } else if (val1 !== val2) {
                    return false;
                }
            }

            return true;
        };

        return !isEqual(normalizedPayload, normalizedExisting);
    }

    static doughnutChartOptions = (title, data, toolTipText = "") => {
        const pieOptionsStatus = {
            title: {
                text: title,
                left: "center",
            },
            tooltip: {
                trigger: "item",
                formatter: function (params) {
                    return `${params.name}: ${params.value} ${toolTipText}`;
                },
            },
            legend: {
                orient: "horizontal",
                left: "left", // Align the legend to the left
                // top: "center",
            },
            grid: {
                left: "20%", // Adjust the grid to ensure the pie chart isn't overlapped by the legend
            },
            series: [
                {
                    name: "Status",
                    type: "pie",
                    radius: ["40%", "70%"],
                    // center: ["50%", "40%"],
                    data: data?.map((item) => ({ value: item.value, name: item.category })),
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            ],
        };
        return pieOptionsStatus;
    };

    // utils.js or utils/index.js
    static barChartOptions = (title, data, unit) => {
        const categories = data.map((item) => item.category);
        const values = data.map((item) => item.value);

        return {
            title: {
                text: title,
                subtext: `Unit: ${unit}`,
                left: "center",
            },
            tooltip: {
                trigger: "axis",
            },
            xAxis: {
                type: "category",
                data: categories,
                axisLabel: {
                    interval: 0, // Show all labels
                    rotate: 45, // Rotate labels if needed
                },
            },
            yAxis: {
                type: "value",
                name: unit,
                nameLocation: "middle",
                nameGap: 30,
            },
            series: [
                {
                    name: title,
                    type: "bar",
                    data: values,
                    itemStyle: {
                        color: "#5470C6", // Example color, adjust as needed
                    },
                    emphasis: {
                        itemStyle: {
                            color: "#91CC75", // Highlight color
                        },
                    },
                },
            ],
            // Optional: Add additional configurations for better UX
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
            },
        };
    };

    static pieChartOptions = (options) => {
        const data = options.data;
        const title = options.title;
        const subtitle = options.subtitle;
        // const data = data.map((item) => item.category);
        // const values = data.map((item) => item.value);
        return {
            title: {
                text: title,
                subtext: subtitle,
                left: 'center'
              },
              tooltip: {
                trigger: 'item'
              },
            //   legend: {
            //     orient: 'vertical',
            //     left: 'left'
            //   },
              series: [
                {
                //   name: unit,
                  type: 'pie',
                  radius: '50%',
               data: data,
                // data: values,
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
        };
    };


    static pieNestChartOptions = (options) => {
        const innerChartdata = options.innerChartdata;
        const outerChartdata = options.outerChartdata;
        // Merging and returning name array
        const legendLabels = [...innerChartdata, ...outerChartdata].map(item => item.name);

        const title = options.title;
        const subtitle = options.subtitle;
        // const data = data.map((item) => item.category);
        // const values = data.map((item) => item.value);
        return {
            title: {
                text: title,
                left: "center",
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              data: legendLabels
            },
            series: [
              {
                name: 'Status',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
                label: {
                  position: 'inner',
                  fontSize: 14
                },
                labelLine: {
                  show: false
                },
                data: innerChartdata,
              },
              {
                name: 'Asset Status',
                type: 'pie',
                radius: ['45%', '60%'],
                labelLine: {
                  length: 30
                },
                label: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                  backgroundColor: '#F6F8FC',
                  borderColor: '#8C8D8E',
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    a: {
                      color: '#6E7079',
                      lineHeight: 22,
                      align: 'center'
                    },
                    hr: {
                      borderColor: '#8C8D8E',
                      width: '100%',
                      borderWidth: 1,
                      height: 0
                    },
                    b: {
                      color: '#4C5058',
                      fontSize: 10,
                      fontWeight: 'bold',
                      lineHeight: 33
                    },
                    per: {
                      color: '#fff',
                      backgroundColor: '#4C5058',
                      padding: [3, 4],
                      borderRadius: 4
                    }
                  }
                },
                data: outerChartdata,
              }
            ]
          };
    };

    static basicBarChartOptions = (options) => {
        const title = options.title;

        const names = options.data.map((item) => item.name);
        const values = options.data.map((item) => item.value);
        return {
            title: {
                text: title,
                left: "center",
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: names,
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: values
              }
            ]
          };
    };

    static getFormButtons = (isLoading = false,onCancel) => {
        return [
            {
                label: "Cancel",
                onClick: onCancel,
                variant: "danger",
                flat: true,
                outlined: true,
            },
            {
                label: "Submit",
                type: "Submit",
                loading: isLoading,
            },
        ].filter(Boolean);
    }
}

export default GlobalUtils;
