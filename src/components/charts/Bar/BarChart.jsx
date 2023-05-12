import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid,
} from "recharts";
import { mockBarData as data } from "../../../data/mockData";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import { Stack } from "@mui/material";

const BarCharts = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack
      sx={{
        justifyContent: "center",
        display: "flex",
        minHeight: isDashboard ? "220px" : "75vh",
        background: colors.primary[400],
        alignItems: "center",
      }}
    >
      <Stack sx={{ width: isDashboard ? "100%" : "1300px", padding: 2 }}>
        <ResponsiveContainer width="100%" aspect={isDashboard ? 2.5 : 3}>
          <BarChart data={data}>
            <XAxis dataKey="country" />
            <YAxis />
            {/* <Tooltip /> */}
            {!isDashboard && <Legend />}
            <Bar
              barSize={30}
              dataKey="Sales"
              fill={colors.greenAccent[400]}
              legendType="line"
            />
            <Bar
              barSize={30}
              dataKey="Recovery"
              fill={colors.redAccent[400]}
              legendType="line"
            />
          </BarChart>
        </ResponsiveContainer>
      </Stack>
    </Stack>
  );
};

export default BarCharts;
