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
  { date: "2020-02-24", confirmed: 79561, deaths: 2629 },
  { date: "2020-02-25", confirmed: 80406, deaths: 2708 },
  { date: "2020-02-26", confirmed: 81388, deaths: 2770 },
  { date: "2020-02-27", confirmed: 82746, deaths: 2814 },
  { date: "2020-02-28", confirmed: 84112, deaths: 2872 },
  { date: "2020-02-29", confirmed: 86011, deaths: 2941 },
  { date: "2020-03-01", confirmed: 88369, deaths: 2996 },
  { date: "2020-03-02", confirmed: 90306, deaths: 3085 },
  { date: "2020-03-03", confirmed: 92840, deaths: 3160 },
  { date: "2020-03-04", confirmed: 95120, deaths: 3254 },
  { date: "2020-03-05", confirmed: 97886, deaths: 3348 },
  { date: "2020-03-06", confirmed: 101801, deaths: 3460 },
  { date: "2020-03-07", confirmed: 105847, deaths: 3558 },
  { date: "2020-03-08", confirmed: 109821, deaths: 3802 },
  { date: "2020-03-09", confirmed: 113590, deaths: 3988 },
  { date: "2020-03-10", confirmed: 118620, deaths: 4262 },
  { date: "2020-03-11", confirmed: 125875, deaths: 4615 },
  { date: "2020-03-12", confirmed: 128352, deaths: 4720 },
  { date: "2020-03-13", confirmed: 145205, deaths: 5404 },
  { date: "2020-03-14", confirmed: 156101, deaths: 5819 },
  { date: "2020-03-15", confirmed: 167454, deaths: 6440 },
  { date: "2020-03-16", confirmed: 181574, deaths: 7126 },
  { date: "2020-03-17", confirmed: 197102, deaths: 7905 },
  { date: "2020-03-18", confirmed: 214821, deaths: 8733 },
  { date: "2020-03-19", confirmed: 242500, deaths: 9867 },
  { date: "2020-03-20", confirmed: 272035, deaths: 11299 },
  { date: "2020-03-21", confirmed: 304396, deaths: 12973 },
  { date: "2020-03-22", confirmed: 336953, deaths: 14651 },
  { date: "2020-03-23", confirmed: 378235, deaths: 16505 },
  { date: "2020-03-24", confirmed: 418045, deaths: 18625 },
  { date: "2020-03-25", confirmed: 467653, deaths: 21181 },
  { date: "2020-03-26", confirmed: 529591, deaths: 23970 },
  { date: "2020-03-27", confirmed: 593291, deaths: 27198 },
  { date: "2020-03-28", confirmed: 660706, deaths: 30652 },
  { date: "2020-03-29", confirmed: 720117, deaths: 33925 },
  { date: "2020-03-30", confirmed: 782365, deaths: 37582 },
  { date: "2020-03-31", confirmed: 857487, deaths: 42107 },
  { date: "2020-04-01", confirmed: 932605, deaths: 46809 },
  { date: "2020-04-02", confirmed: 1013157, deaths: 52983 },
  { date: "2020-04-03", confirmed: 1095917, deaths: 58787 },
  { date: "2020-04-04", confirmed: 1197405, deaths: 64606 },
  { date: "2020-04-05", confirmed: 1272115, deaths: 69374 },
  { date: "2020-04-06", confirmed: 1345048, deaths: 74565 },
  { date: "2020-04-07", confirmed: 1426096, deaths: 81865 },
  { date: "2020-04-08", confirmed: 1511104, deaths: 88338 },
  { date: "2020-04-09", confirmed: 1595350, deaths: 95455 },
  { date: "2020-04-10", confirmed: 1691719, deaths: 102525 },
  { date: "2020-04-11", confirmed: 1771514, deaths: 108503 },
  { date: "2020-04-12", confirmed: 1846680, deaths: 114090 },
]

const formatDate = (tickValue) => {
  const months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
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
