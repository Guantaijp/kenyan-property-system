"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 900000,
  },
  {
    name: "Feb",
    total: 950000,
  },
  {
    name: "Mar",
    total: 980000,
  },
  {
    name: "Apr",
    total: 1000000,
  },
  {
    name: "May",
    total: 1050000,
  },
  {
    name: "Jun",
    total: 1100000,
  },
  {
    name: "Jul",
    total: 1150000,
  },
  {
    name: "Aug",
    total: 1200000,
  },
  {
    name: "Sep",
    total: 1150000,
  },
  {
    name: "Oct",
    total: 1180000,
  },
  {
    name: "Nov",
    total: 1200000,
  },
  {
    name: "Dec",
    total: 1250000,
  },
]

export function Overview() {
  const formatCurrency = (value: number) => {
    return `KSh ${(value / 1000).toFixed(0)}K`
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={formatCurrency} />
        <Tooltip
          formatter={(value: number) => [`KSh ${value.toLocaleString()}`, "Revenue"]}
          labelFormatter={(label) => `Month: ${label}`}
        />
        <Bar dataKey="total" fill="#001f5c" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
