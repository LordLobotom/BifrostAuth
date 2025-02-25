"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Generate some example data
const generateData = () => {
  const data = []
  const now = new Date()
  for (let i = 30; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
    data.push({
      date: date.toISOString().split("T")[0],
      activeUsers: Math.floor(Math.random() * 1000) + 500, // Random number between 500 and 1500
    })
  }
  return data
}

const data = generateData()

export function ActivityGraph() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tick={{ fill: "var(--foreground)" }}
          tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        />
        <YAxis tick={{ fill: "var(--foreground)" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--background)",
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
        />
        <Line type="monotone" dataKey="activeUsers" stroke="var(--primary)" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

