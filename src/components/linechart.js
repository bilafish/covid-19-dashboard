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
  { date: "2020-02-25", confirmed: 80372, deaths: 2708 },
  { date: "2020-02-26", confirmed: 81346, deaths: 2770 },
  { date: "2020-02-27", confirmed: 82704, deaths: 2814 },
  { date: "2020-02-28", confirmed: 84070, deaths: 2872 },
  { date: "2020-02-29", confirmed: 85967, deaths: 2941 },
  { date: "2020-03-01", confirmed: 88325, deaths: 2996 },
  { date: "2020-03-02", confirmed: 90262, deaths: 3085 },
  { date: "2020-03-03", confirmed: 92795, deaths: 3160 },
  { date: "2020-03-04", confirmed: 95075, deaths: 3254 },
  { date: "2020-03-05", confirmed: 97844, deaths: 3347 },
  { date: "2020-03-06", confirmed: 101761, deaths: 3459 },
  { date: "2020-03-07", confirmed: 105782, deaths: 3558 },
  { date: "2020-03-08", confirmed: 109754, deaths: 3801 },
  { date: "2020-03-09", confirmed: 113536, deaths: 3987 },
  { date: "2020-03-10", confirmed: 118375, deaths: 4263 },
  { date: "2020-03-11", confirmed: 125704, deaths: 4610 },
  { date: "2020-03-12", confirmed: 130909, deaths: 4913 },
  { date: "2020-03-13", confirmed: 145204, deaths: 5411 },
  { date: "2020-03-14", confirmed: 156283, deaths: 5831 },
  { date: "2020-03-15", confirmed: 167022, deaths: 6471 },
  { date: "2020-03-16", confirmed: 181452, deaths: 7151 },
  { date: "2020-03-17", confirmed: 196917, deaths: 7957 },
  { date: "2020-03-18", confirmed: 216161, deaths: 8852 },
  { date: "2020-03-19", confirmed: 243084, deaths: 9958 },
  { date: "2020-03-20", confirmed: 272698, deaths: 11439 },
  { date: "2020-03-21", confirmed: 304844, deaths: 13141 },
  { date: "2020-03-22", confirmed: 337597, deaths: 14840 },
  { date: "2020-03-23", confirmed: 378381, deaths: 16758 },
  { date: "2020-03-24", confirmed: 418569, deaths: 19026 },
  { date: "2020-03-25", confirmed: 468155, deaths: 21799 },
  { date: "2020-03-26", confirmed: 530138, deaths: 24800 },
  { date: "2020-03-27", confirmed: 594178, deaths: 28308 },
  { date: "2020-03-28", confirmed: 661544, deaths: 31990 },
  { date: "2020-03-29", confirmed: 720695, deaths: 35456 },
  { date: "2020-03-30", confirmed: 783580, deaths: 39604 },
  { date: "2020-03-31", confirmed: 858317, deaths: 44440 },
  { date: "2020-04-01", confirmed: 933905, deaths: 49968 },
  { date: "2020-04-02", confirmed: 1014713, deaths: 56251 },
  { date: "2020-04-03", confirmed: 1097193, deaths: 62213 },
  { date: "2020-04-04", confirmed: 1177447, deaths: 68044 },
  { date: "2020-04-05", confirmed: 1251123, deaths: 73031 },
  { date: "2020-04-06", confirmed: 1322598, deaths: 78862 },
  { date: "2020-04-07", confirmed: 1397537, deaths: 86765 },
  { date: "2020-04-08", confirmed: 1481490, deaths: 93457 },
  { date: "2020-04-09", confirmed: 1567423, deaths: 101043 },
  { date: "2020-04-10", confirmed: 1659674, deaths: 108286 },
  { date: "2020-04-11", confirmed: 1737813, deaths: 114307 },
  { date: "2020-04-12", confirmed: 1836615, deaths: 120007 },
  { date: "2020-04-13", confirmed: 1906692, deaths: 125730 },
  { date: "2020-04-14", confirmed: 1977287, deaths: 132621 },
  { date: "2020-04-15", confirmed: 2057584, deaths: 140886 },
  { date: "2020-04-16", confirmed: 2153578, deaths: 148157 },
  { date: "2020-04-17", confirmed: 2242537, deaths: 157022 },
  { date: "2020-04-18", confirmed: 2316073, deaths: 163452 },
  { date: "2020-04-19", confirmed: 2398423, deaths: 167983 },
  { date: "2020-04-20", confirmed: 2472264, deaths: 173381 },
  { date: "2020-04-21", confirmed: 2546905, deaths: 180475 },
  { date: "2020-04-22", confirmed: 2622750, deaths: 187174 },
  { date: "2020-04-23", confirmed: 2711635, deaths: 193926 },
  { date: "2020-04-24", confirmed: 2799064, deaths: 200266 },
  { date: "2020-04-25", confirmed: 2884420, deaths: 206459 },
  { date: "2020-04-26", confirmed: 2958352, deaths: 210192 },
  { date: "2020-04-27", confirmed: 3027215, deaths: 214747 },
  { date: "2020-04-28", confirmed: 3101078, deaths: 221109 },
  { date: "2020-04-29", confirmed: 3176596, deaths: 227992 },
  { date: "2020-04-30", confirmed: 3261450, deaths: 233687 },
  { date: "2020-05-01", confirmed: 3349915, deaths: 238942 },
  { date: "2020-05-02", confirmed: 3432050, deaths: 244129 },
  { date: "2020-05-03", confirmed: 3511157, deaths: 247797 },
  { date: "2020-05-04", confirmed: 3587874, deaths: 251890 },
  { date: "2020-05-05", confirmed: 3668635, deaths: 257612 },
  { date: "2020-05-06", confirmed: 3760836, deaths: 264196 },
  { date: "2020-05-07", confirmed: 3851895, deaths: 269905 },
  { date: "2020-05-08", confirmed: 3945002, deaths: 275250 },
  { date: "2020-05-09", confirmed: 4030363, deaths: 279661 },
  { date: "2020-05-10", confirmed: 4108270, deaths: 283086 },
  { date: "2020-05-11", confirmed: 4184838, deaths: 286697 },
  { date: "2020-05-12", confirmed: 4268247, deaths: 292319 },
  { date: "2020-05-13", confirmed: 4353211, deaths: 297539 },
  { date: "2020-05-14", confirmed: 4451126, deaths: 302813 },
  { date: "2020-05-15", confirmed: 4548549, deaths: 307998 },
  { date: "2020-05-16", confirmed: 4641727, deaths: 312150 },
  { date: "2020-05-17", confirmed: 4721968, deaths: 315546 },
  { date: "2020-05-18", confirmed: 4810315, deaths: 318853 },
  { date: "2020-05-19", confirmed: 4906193, deaths: 323662 },
  { date: "2020-05-20", confirmed: 5005761, deaths: 328483 },
  { date: "2020-05-21", confirmed: 5112366, deaths: 333292 },
  { date: "2020-05-22", confirmed: 5220585, deaths: 338585 },
  { date: "2020-05-23", confirmed: 5321022, deaths: 342565 },
  { date: "2020-05-24", confirmed: 5417354, deaths: 345412 },
  { date: "2020-05-25", confirmed: 5504324, deaths: 346583 },
  { date: "2020-05-26", confirmed: 5599216, deaths: 350807 },
  { date: "2020-05-27", confirmed: 5702113, deaths: 355990 },
  { date: "2020-05-28", confirmed: 5820253, deaths: 360686 },
  { date: "2020-05-29", confirmed: 5941938, deaths: 365380 },
  { date: "2020-05-30", confirmed: 6070884, deaths: 369492 },
  { date: "2020-05-31", confirmed: 6178860, deaths: 372373 },
  { date: "2020-06-01", confirmed: 6275246, deaths: 375902 },
  { date: "2020-06-02", confirmed: 6387849, deaths: 380599 },
  { date: "2020-06-03", confirmed: 6519164, deaths: 386298 },
  { date: "2020-06-04", confirmed: 6642853, deaths: 391472 },
  { date: "2020-06-05", confirmed: 6776126, deaths: 396294 },
  { date: "2020-06-06", confirmed: 6902650, deaths: 400107 },
  { date: "2020-06-07", confirmed: 7015739, deaths: 402856 },
  { date: "2020-06-08", confirmed: 7119355, deaths: 406600 },
  { date: "2020-06-09", confirmed: 7242692, deaths: 411461 },
  { date: "2020-06-10", confirmed: 7376333, deaths: 416670 },
  { date: "2020-06-11", confirmed: 7514724, deaths: 421461 },
  { date: "2020-06-12", confirmed: 7644260, deaths: 425780 },
  { date: "2020-06-13", confirmed: 7778881, deaths: 430047 },
  { date: "2020-06-14", confirmed: 7912685, deaths: 433394 },
  { date: "2020-06-15", confirmed: 8034461, deaths: 436899 },
  { date: "2020-06-16", confirmed: 8173940, deaths: 443685 },
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
        labelFormatter={(label) => formatDate(label)}
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
