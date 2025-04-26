export const series = [
    {
        name: "Sensor 1",
        data: [11, 32, 45, 32, 34, 52, 45],
        color: "#FF6A00", // orange-1
    },
    {
        name: "Sensor 2",
        data: [31, 40, 28, 51, 42, 109, 30],
        color: "#551FFF", // violet-1
    },
    {
        name: "Sensor 3",
        data: [25, 36, 30, 48, 60, 70, 15],
        color: "#00B7FE", // blue-1
    },
    {
        name: "Sensor 4",
        data: [18, 24, 20, 35, 30, 40, 15],
        color: "#FD2254", // red-1
    }
]
  
export  const chartOptions = {
    chart: {
      height: 350,
      type: "area",
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
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };