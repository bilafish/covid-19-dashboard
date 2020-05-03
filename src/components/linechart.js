import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import thousands_separators from "../utils/numberformatter"

const data = [
  { date: "2020-01-22", confirmed: 555, deaths: 17 },
  { date: "2020-01-23", confirmed: 654, deaths: 18 },
  { date: "2020-01-24", confirmed: 941, deaths: 26 },
  { date: "2020-01-25", confirmed: 1434, deaths: 42 },
  { date: "2020-01-26", confirmed: 2118, deaths: 56 },
  { date: "2020-01-27", confirmed: 2927, deaths: 82 },
  { date: "2020-01-28", confirmed: 5578, deaths: 131 },
  { date: "2020-01-29", confirmed: 6166, deaths: 133 },
  { date: "2020-01-30", confirmed: 8234, deaths: 171 },
  { date: "2020-01-31", confirmed: 9927, deaths: 213 },
  { date: "2020-02-01", confirmed: 12038, deaths: 259 },
  { date: "2020-02-02", confirmed: 16787, deaths: 362 },
  { date: "2020-02-03", confirmed: 19881, deaths: 426 },
  { date: "2020-02-04", confirmed: 23892, deaths: 492 },
  { date: "2020-02-05", confirmed: 27635, deaths: 564 },
  { date: "2020-02-06", confirmed: 30794, deaths: 634 },
  { date: "2020-02-07", confirmed: 34391, deaths: 719 },
  { date: "2020-02-08", confirmed: 37120, deaths: 806 },
  { date: "2020-02-09", confirmed: 40150, deaths: 906 },
  { date: "2020-02-10", confirmed: 42762, deaths: 1013 },
  { date: "2020-02-11", confirmed: 44802, deaths: 1113 },
  { date: "2020-02-12", confirmed: 45221, deaths: 1118 },
  { date: "2020-02-13", confirmed: 60368, deaths: 1371 },
  { date: "2020-02-14", confirmed: 66885, deaths: 1523 },
  { date: "2020-02-15", confirmed: 69030, deaths: 1666 },
  { date: "2020-02-16", confirmed: 71224, deaths: 1770 },
  { date: "2020-02-17", confirmed: 73258, deaths: 1868 },
  { date: "2020-02-18", confirmed: 75136, deaths: 2007 },
  { date: "2020-02-19", confirmed: 75639, deaths: 2122 },
  { date: "2020-02-20", confirmed: 76197, deaths: 2247 },
  { date: "2020-02-21", confirmed: 76819, deaths: 2251 },
  { date: "2020-02-22", confirmed: 78572, deaths: 2458 },
  { date: "2020-02-23", confirmed: 78958, deaths: 2469 },
  { date: "2020-02-24", confirmed: 79525, deaths: 2629 },
  { date: "2020-02-25", confirmed: 80370, deaths: 2708 },
  { date: "2020-02-26", confirmed: 81346, deaths: 2770 },
  { date: "2020-02-27", confirmed: 82704, deaths: 2814 },
  { date: "2020-02-28", confirmed: 84068, deaths: 2872 },
  { date: "2020-02-29", confirmed: 85967, deaths: 2941 },
  { date: "2020-03-01", confirmed: 88325, deaths: 2996 },
  { date: "2020-03-02", confirmed: 90261, deaths: 3085 },
  { date: "2020-03-03", confirmed: 92795, deaths: 3160 },
  { date: "2020-03-04", confirmed: 95075, deaths: 3254 },
  { date: "2020-03-05", confirmed: 97841, deaths: 3347 },
  { date: "2020-03-06", confirmed: 101756, deaths: 3459 },
  { date: "2020-03-07", confirmed: 105781, deaths: 3558 },
  { date: "2020-03-08", confirmed: 109753, deaths: 3801 },
  { date: "2020-03-09", confirmed: 113521, deaths: 3987 },
  { date: "2020-03-10", confirmed: 118369, deaths: 4263 },
  { date: "2020-03-11", confirmed: 125697, deaths: 4610 },
  { date: "2020-03-12", confirmed: 128229, deaths: 4721 },
  { date: "2020-03-13", confirmed: 145187, deaths: 5409 },
  { date: "2020-03-14", confirmed: 156246, deaths: 5828 },
  { date: "2020-03-15", confirmed: 166137, deaths: 6428 },
  { date: "2020-03-16", confirmed: 181278, deaths: 7149 },
  { date: "2020-03-17", confirmed: 196788, deaths: 7955 },
  { date: "2020-03-18", confirmed: 215936, deaths: 8848 },
  { date: "2020-03-19", confirmed: 242963, deaths: 9955 },
  { date: "2020-03-20", confirmed: 272377, deaths: 11436 },
  { date: "2020-03-21", confirmed: 304680, deaths: 13136 },
  { date: "2020-03-22", confirmed: 337376, deaths: 14835 },
  { date: "2020-03-23", confirmed: 378074, deaths: 16753 },
  { date: "2020-03-24", confirmed: 418074, deaths: 19013 },
  { date: "2020-03-25", confirmed: 467723, deaths: 21785 },
  { date: "2020-03-26", confirmed: 529701, deaths: 24788 },
  { date: "2020-03-27", confirmed: 593423, deaths: 28288 },
  { date: "2020-03-28", confirmed: 660824, deaths: 31952 },
  { date: "2020-03-29", confirmed: 720285, deaths: 35421 },
  { date: "2020-03-30", confirmed: 782490, deaths: 39563 },
  { date: "2020-03-31", confirmed: 857608, deaths: 44402 },
  { date: "2020-04-01", confirmed: 932638, deaths: 49910 },
  { date: "2020-04-02", confirmed: 1013458, deaths: 56182 },
  { date: "2020-04-03", confirmed: 1095876, deaths: 62139 },
  { date: "2020-04-04", confirmed: 1176059, deaths: 67960 },
  { date: "2020-04-05", confirmed: 1249737, deaths: 72946 },
  { date: "2020-04-06", confirmed: 1321427, deaths: 78767 },
  { date: "2020-04-07", confirmed: 1396438, deaths: 86662 },
  { date: "2020-04-08", confirmed: 1480200, deaths: 93354 },
  { date: "2020-04-09", confirmed: 1565538, deaths: 100891 },
  { date: "2020-04-10", confirmed: 1657929, deaths: 108113 },
  { date: "2020-04-11", confirmed: 1733323, deaths: 114044 },
  { date: "2020-04-12", confirmed: 1834684, deaths: 119846 },
  { date: "2020-04-13", confirmed: 1905192, deaths: 125561 },
  { date: "2020-04-14", confirmed: 1974659, deaths: 132414 },
  { date: "2020-04-15", confirmed: 2055506, deaths: 140658 },
  { date: "2020-04-16", confirmed: 2151872, deaths: 147946 },
  { date: "2020-04-17", confirmed: 2239723, deaths: 156804 },
  { date: "2020-04-18", confirmed: 2313046, deaths: 163214 },
  { date: "2020-04-19", confirmed: 2396461, deaths: 167773 },
  { date: "2020-04-20", confirmed: 2467203, deaths: 173098 },
  { date: "2020-04-21", confirmed: 2539894, deaths: 180113 },
  { date: "2020-04-22", confirmed: 2462308, deaths: 165509 },
  { date: "2020-04-23", confirmed: 2708547, deaths: 193667 },
  { date: "2020-04-24", confirmed: 2591609, deaths: 177398 },
  { date: "2020-04-25", confirmed: 2880798, deaths: 206185 },
  { date: "2020-04-26", confirmed: 2953564, deaths: 209881 },
  { date: "2020-04-27", confirmed: 3019022, deaths: 214278 },
  { date: "2020-04-28", confirmed: 3082110, deaths: 220361 },
  { date: "2020-04-29", confirmed: 3005412, deaths: 203565 },
  { date: "2020-04-30", confirmed: 3256853, deaths: 233357 },
  { date: "2020-05-01", confirmed: 3343777, deaths: 238619 },
  { date: "2020-05-02", confirmed: 3397240, deaths: 242533 },
]

const formatDate = (tickValue) => {
  const months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  }
  const day = tickValue.slice(8)
  const month = months[tickValue.slice(5, 7)]

  return `${month} ${day}`
}

const CustomizedAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#fdf9ed"
        fontSize="0.8rem"
      >
        {formatDate(payload.value)}
      </text>
    </g>
  )
}

const CustomizedYAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#fdf9ed"
        fontSize="0.8rem"
      >
        {thousands_separators(payload.value)}
      </text>
    </g>
  )
}

const LineChartTrend = () => {
  const matches = useMediaQuery("(min-width:800px)")
  let width = matches ? 500 : 300
  let height = matches ? 390 : 234

  return (
    <LineChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid horizontal={false} vertical={false} />
      <XAxis
        dataKey="date"
        tickLine={false}
        stroke="#fdf9ed"
        tick={<CustomizedAxisTick />}
      />
      <YAxis
        tickLine={false}
        tickFormatter={thousands_separators}
        stroke="#fdf9ed"
        tick={<CustomizedYAxisTick />}
      />
      <Tooltip
        contentStyle={{ background: "#60738f" }}
        formatter={(value, name, props) => {
          return [
            thousands_separators(value),
            name.charAt(0).toUpperCase() + name.slice(1),
          ]
        }}
        labelFormatter={(label) => {
          const months = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar",
            "04": "Apr",
          }
          const day = label.slice(8)
          const month = months[label.slice(5, 7)]

          return `${month} ${day}`
        }}
      />
      <Legend
        iconType="circle"
        formatter={(value) => {
          return value.charAt(0).toUpperCase() + value.slice(1)
        }}
      />
      <Line
        type="monotone"
        dataKey="confirmed"
        stroke="#fff376"
        dot={false}
        strokeWidth={3}
      />

      <Line
        type="monotone"
        dataKey="deaths"
        stroke="#fea3a8"
        dot={false}
        strokeWidth={3}
      />
    </LineChart>
  )
}

export default LineChartTrend
