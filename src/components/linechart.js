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
  { date: "2020-03-12", confirmed: 130909, deaths: 4912 },
  { date: "2020-03-13", confirmed: 145196, deaths: 5410 },
  { date: "2020-03-14", confirmed: 156272, deaths: 5830 },
  { date: "2020-03-15", confirmed: 167009, deaths: 6470 },
  { date: "2020-03-16", confirmed: 181428, deaths: 7150 },
  { date: "2020-03-17", confirmed: 196888, deaths: 7956 },
  { date: "2020-03-18", confirmed: 216118, deaths: 8851 },
  { date: "2020-03-19", confirmed: 243026, deaths: 9957 },
  { date: "2020-03-20", confirmed: 272623, deaths: 11437 },
  { date: "2020-03-21", confirmed: 304751, deaths: 13138 },
  { date: "2020-03-22", confirmed: 337479, deaths: 14837 },
  { date: "2020-03-23", confirmed: 378218, deaths: 16755 },
  { date: "2020-03-24", confirmed: 418386, deaths: 19018 },
  { date: "2020-03-25", confirmed: 467955, deaths: 21790 },
  { date: "2020-03-26", confirmed: 529894, deaths: 24790 },
  { date: "2020-03-27", confirmed: 593886, deaths: 28293 },
  { date: "2020-03-28", confirmed: 661276, deaths: 31968 },
  { date: "2020-03-29", confirmed: 720411, deaths: 35428 },
  { date: "2020-03-30", confirmed: 783037, deaths: 39572 },
  { date: "2020-03-31", confirmed: 857788, deaths: 44403 },
  { date: "2020-04-01", confirmed: 933313, deaths: 49927 },
  { date: "2020-04-02", confirmed: 1014128, deaths: 56205 },
  { date: "2020-04-03", confirmed: 1096456, deaths: 62154 },
  { date: "2020-04-04", confirmed: 1176775, deaths: 67981 },
  { date: "2020-04-05", confirmed: 1250352, deaths: 72953 },
  { date: "2020-04-06", confirmed: 1321705, deaths: 78771 },
  { date: "2020-04-07", confirmed: 1396666, deaths: 86666 },
  { date: "2020-04-08", confirmed: 1480458, deaths: 93358 },
  { date: "2020-04-09", confirmed: 1566308, deaths: 100925 },
  { date: "2020-04-10", confirmed: 1658577, deaths: 108157 },
  { date: "2020-04-11", confirmed: 1736631, deaths: 114175 },
  { date: "2020-04-12", confirmed: 1835411, deaths: 119855 },
  { date: "2020-04-13", confirmed: 1905506, deaths: 125564 },
  { date: "2020-04-14", confirmed: 1976112, deaths: 132454 },
  { date: "2020-04-15", confirmed: 2056284, deaths: 140702 },
  { date: "2020-04-16", confirmed: 2152287, deaths: 147970 },
  { date: "2020-04-17", confirmed: 2240603, deaths: 156829 },
  { date: "2020-04-18", confirmed: 2314108, deaths: 163261 },
  { date: "2020-04-19", confirmed: 2396424, deaths: 167780 },
  { date: "2020-04-20", confirmed: 2468612, deaths: 173149 },
  { date: "2020-04-21", confirmed: 2544715, deaths: 180247 },
  { date: "2020-04-22", confirmed: 2620486, deaths: 186937 },
  { date: "2020-04-23", confirmed: 2709188, deaths: 193681 },
  { date: "2020-04-24", confirmed: 2796514, deaths: 200013 },
  { date: "2020-04-25", confirmed: 2881745, deaths: 206199 },
  { date: "2020-04-26", confirmed: 2955620, deaths: 209911 },
  { date: "2020-04-27", confirmed: 3024419, deaths: 214464 },
  { date: "2020-04-28", confirmed: 3098142, deaths: 220832 },
  { date: "2020-04-29", confirmed: 3173579, deaths: 227707 },
  { date: "2020-04-30", confirmed: 3258207, deaths: 233392 },
  { date: "2020-05-01", confirmed: 3346547, deaths: 238642 },
  { date: "2020-05-02", confirmed: 3428565, deaths: 243830 },
  { date: "2020-05-03", confirmed: 3507586, deaths: 247489 },
  { date: "2020-05-04", confirmed: 3584163, deaths: 251575 },
  { date: "2020-05-05", confirmed: 3664715, deaths: 257289 },
  { date: "2020-05-06", confirmed: 3756640, deaths: 263876 },
  { date: "2020-05-07", confirmed: 3847509, deaths: 269581 },
  { date: "2020-05-08", confirmed: 3940365, deaths: 274935 },
  { date: "2020-05-09", confirmed: 4025607, deaths: 279334 },
  { date: "2020-05-10", confirmed: 4103446, deaths: 282756 },
  { date: "2020-05-11", confirmed: 4179757, deaths: 286361 },
  { date: "2020-05-12", confirmed: 4262907, deaths: 291986 },
  { date: "2020-05-13", confirmed: 4347508, deaths: 297206 },
  { date: "2020-05-14", confirmed: 4445174, deaths: 302482 },
  { date: "2020-05-15", confirmed: 4542347, deaths: 307666 },
  { date: "2020-05-16", confirmed: 4635420, deaths: 311820 },
  { date: "2020-05-17", confirmed: 4715594, deaths: 315215 },
  { date: "2020-05-18", confirmed: 4803784, deaths: 318517 },
  { date: "2020-05-19", confirmed: 4899424, deaths: 323331 },
  { date: "2020-05-20", confirmed: 4998665, deaths: 328147 },
  { date: "2020-05-21", confirmed: 5105027, deaths: 332974 },
  { date: "2020-05-22", confirmed: 5212899, deaths: 338267 },
  { date: "2020-05-23", confirmed: 5313184, deaths: 342245 },
  { date: "2020-05-24", confirmed: 5409361, deaths: 345092 },
  { date: "2020-05-25", confirmed: 5496417, deaths: 346261 },
  { date: "2020-05-26", confirmed: 5591072, deaths: 350480 },
  { date: "2020-05-27", confirmed: 5693866, deaths: 355663 },
  { date: "2020-05-28", confirmed: 5811747, deaths: 360365 },
  { date: "2020-05-29", confirmed: 5933210, deaths: 365076 },
  { date: "2020-05-30", confirmed: 6062056, deaths: 369214 },
  { date: "2020-05-31", confirmed: 6169910, deaths: 372095 },
  { date: "2020-06-01", confirmed: 6269790, deaths: 375621 },
  { date: "2020-06-02", confirmed: 6382303, deaths: 380318 },
  { date: "2020-06-03", confirmed: 6513436, deaths: 386015 },
  { date: "2020-06-04", confirmed: 6636970, deaths: 391190 },
  { date: "2020-06-05", confirmed: 6774904, deaths: 396204 },
  { date: "2020-06-06", confirmed: 6901877, deaths: 400051 },
  { date: "2020-06-07", confirmed: 7015312, deaths: 402792 },
  { date: "2020-06-08", confirmed: 7119002, deaths: 406543 },
  { date: "2020-06-09", confirmed: 7242313, deaths: 411441 },
  { date: "2020-06-10", confirmed: 7360239, deaths: 416201 },
  { date: "2020-06-11", confirmed: 7514481, deaths: 421458 },
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
