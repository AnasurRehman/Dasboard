import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import ProgressCircle from "./ProgressCircle";
import { tokens } from "../../theme";

const StatBox = ({ icon, title, increase, subtitle, progress }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack
      width="100%"
      m="20px 0px"
      p="10px"
      backgroundColor={colors.primary[400]}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack spacing={1}>
          <i
            className={icon}
            style={{ color: colors.greenAccent[500], fontSize: "24px" }}
          />
          <Typography variant="h4" fontWeight="bold">
            {title}
          </Typography>
        </Stack>

        <ProgressCircle progress={progress} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default StatBox;
