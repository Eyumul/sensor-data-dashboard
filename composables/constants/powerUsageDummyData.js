export const barSeries = [
    {
        name: "Power Used (mWh)",
        data: [120, 95, 80, 70], // Sensor 1-4
    },
];
export const barOptions = {
    chart: {
        type: "bar",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            distributed: true
        },
    },
    xaxis: {
        categories: ["Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4"],
    },
    colors: ["#FF6A00", "#551FFF", "#00B7FE", "#FD2254"],
};

export const areaSeries = [
    {
        name: "Old System",
        data: [80, 85, 90, 95, 100],
    },
    {
        name: "New System",
        data: [50, 52, 55, 57, 60],
    },
];

export const areaOptions = {
    chart: {
        type: "area",
        zoom: { enabled: false },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    colors: ["#FD2254", "#00B7FE"], // red for old, blue for new
    xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    tooltip: {
        x: {
            format: "dd/MM/yy",
        },
    },
};

export const radialSeries = [65]; // Assume 65% power saved
export const radialOptions = {
    chart: {
        type: "radialBar",
    },
    labels: ["Power Saved"],
    colors: ["#551FFF"],
};
