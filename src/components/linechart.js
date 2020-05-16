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
  { date: "2020-03-11", confirmed: 125699, deaths: 4610 },
  { date: "2020-03-12", confirmed: 128246, deaths: 4722 },
  { date: "2020-03-13", confirmed: 145191, deaths: 5409 },
  { date: "2020-03-14", confirmed: 156248, deaths: 5828 },
  { date: "2020-03-15", confirmed: 166889, deaths: 6469 },
  { date: "2020-03-16", confirmed: 181299, deaths: 7149 },
  { date: "2020-03-17", confirmed: 196809, deaths: 7955 },
  { date: "2020-03-18", confirmed: 215965, deaths: 8848 },
  { date: "2020-03-19", confirmed: 242978, deaths: 9955 },
  { date: "2020-03-20", confirmed: 272393, deaths: 11436 },
  { date: "2020-03-21", confirmed: 304705, deaths: 13136 },
  { date: "2020-03-22", confirmed: 337376, deaths: 14835 },
  { date: "2020-03-23", confirmed: 378102, deaths: 16754 },
  { date: "2020-03-24", confirmed: 418106, deaths: 19014 },
  { date: "2020-03-25", confirmed: 467751, deaths: 21785 },
  { date: "2020-03-26", confirmed: 529722, deaths: 24788 },
  { date: "2020-03-27", confirmed: 593459, deaths: 28288 },
  { date: "2020-03-28", confirmed: 660853, deaths: 31953 },
  { date: "2020-03-29", confirmed: 720290, deaths: 35421 },
  { date: "2020-03-30", confirmed: 782500, deaths: 39563 },
  { date: "2020-03-31", confirmed: 857608, deaths: 44402 },
  { date: "2020-04-01", confirmed: 932650, deaths: 49910 },
  { date: "2020-04-02", confirmed: 1013477, deaths: 56182 },
  { date: "2020-04-03", confirmed: 1095893, deaths: 62139 },
  { date: "2020-04-04", confirmed: 1176059, deaths: 67960 },
  { date: "2020-04-05", confirmed: 1249743, deaths: 72947 },
  { date: "2020-04-06", confirmed: 1321436, deaths: 78767 },
  { date: "2020-04-07", confirmed: 1396438, deaths: 86662 },
  { date: "2020-04-08", confirmed: 1480232, deaths: 93354 },
  { date: "2020-04-09", confirmed: 1565555, deaths: 100891 },
  { date: "2020-04-10", confirmed: 1657950, deaths: 108113 },
  { date: "2020-04-11", confirmed: 1736032, deaths: 114146 },
  { date: "2020-04-12", confirmed: 1835145, deaths: 119853 },
  { date: "2020-04-13", confirmed: 1905160, deaths: 125561 },
  { date: "2020-04-14", confirmed: 1975566, deaths: 132439 },
  { date: "2020-04-15", confirmed: 2055424, deaths: 140659 },
  { date: "2020-04-16", confirmed: 2151792, deaths: 147946 },
  { date: "2020-04-17", confirmed: 2239634, deaths: 156804 },
  { date: "2020-04-18", confirmed: 2313005, deaths: 163214 },
  { date: "2020-04-19", confirmed: 2396354, deaths: 167772 },
  { date: "2020-04-20", confirmed: 2467083, deaths: 173097 },
  { date: "2020-04-21", confirmed: 2544204, deaths: 180236 },
  { date: "2020-04-22", confirmed: 2619407, deaths: 186912 },
  { date: "2020-04-23", confirmed: 2708403, deaths: 193665 },
  { date: "2020-04-24", confirmed: 2795731, deaths: 199997 },
  { date: "2020-04-25", confirmed: 2881140, deaths: 206187 },
  { date: "2020-04-26", confirmed: 2955033, deaths: 209900 },
  { date: "2020-04-27", confirmed: 3023722, deaths: 214444 },
  { date: "2020-04-28", confirmed: 3097229, deaths: 220801 },
  { date: "2020-04-29", confirmed: 3172287, deaths: 227665 },
  { date: "2020-04-30", confirmed: 3256910, deaths: 233360 },
  { date: "2020-05-01", confirmed: 3345558, deaths: 238619 },
  { date: "2020-05-02", confirmed: 3427584, deaths: 243813 },
  { date: "2020-05-03", confirmed: 3506729, deaths: 247470 },
  { date: "2020-05-04", confirmed: 3583055, deaths: 251537 },
  { date: "2020-05-05", confirmed: 3662691, deaths: 257239 },
  { date: "2020-05-06", confirmed: 3756069, deaths: 263855 },
  { date: "2020-05-07", confirmed: 3845718, deaths: 269567 },
  { date: "2020-05-08", confirmed: 3938064, deaths: 274898 },
  { date: "2020-05-09", confirmed: 4024009, deaths: 279311 },
  { date: "2020-05-10", confirmed: 4101699, deaths: 282709 },
  { date: "2020-05-11", confirmed: 4177502, deaths: 286330 },
  { date: "2020-05-12", confirmed: 4261945, deaths: 291962 },
  { date: "2020-05-13", confirmed: 4347018, deaths: 297197 },
  { date: "2020-05-14", confirmed: 4442163, deaths: 302418 },
  { date: "2020-05-15", confirmed: 4542347, deaths: 307666 },
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
