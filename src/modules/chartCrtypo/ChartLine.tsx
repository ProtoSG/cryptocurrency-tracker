import { Box } from "@mui/material";
import { axisClasses, LineChart, lineElementClasses, markElementClasses } from "@mui/x-charts";
import { useEffect, useState } from "react";

export default function ChartLine() {
  const dataset = [
    { day: '2019-01-01', value: 2 },
    { day: '2019-01-02', value: 5 },
    { day: '2019-01-03', value: 2 },
    { day: '2019-01-04', value: 8 },
    { day: '2019-01-05', value: 1 },
    { day: '2019-01-06', value: 5 },
    { day: '2019-01-07', value: 5 },
    { day: '2019-01-08', value: 5 },
    { day: '2019-01-09', value: 10 },
  ]

  const valueFormatter = (value: number | null) => `${value}`;

  return (
    <Box sx={{ width: '100%' }}>
      <LineChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: 'point',
            dataKey: 'day',
            valueFormatter: (day, context) =>
              context.location === 'tick'
                ? `${day.slice(5, 10)}`
                : `${day}`,
          },
        ]}
        series={[{ dataKey: 'value', valueFormatter }]}
        height={300}
        sx={{
          [`& .${axisClasses.bottom}, & .${axisClasses.left}, & .${axisClasses.line}, & .${axisClasses.tick}`]: {
            stroke: "#ffffff",
          },
        }}
      />
    </Box>
  )
}
