import { Stack, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../../theme";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { mockBarData as data } from "../../../data/mockData";

const LineCharts = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack
      sx={{
        justifyContent: "center",
        display: "flex",
        minHeight: isDashboard ? "220px" : "75vh",
        background: colors.primary[400],
        width: "100%",
      }}
    >
      <Stack
        sx={{
          maxWidth: isDashboard ? "75vw" : "100vw",
          padding: 2,
        }}
      >
        <ResponsiveContainer width="100%" aspect={4.5}>
          <LineChart data={data}>
            <XAxis dataKey="country" />
            <YAxis />

            {!isDashboard && <Legend />}
            <Line
              strokeWidth={5}
              dataKey="Sales"
              stroke={colors.greenAccent[400]}
              legendType="line"
            />
            <Line
              strokeWidth={5}
              dataKey="Recovery"
              stroke={colors.redAccent[400]}
              legendType="line"
            />
          </LineChart>
        </ResponsiveContainer>
      </Stack>
    </Stack>
  );
};

export default LineCharts;
