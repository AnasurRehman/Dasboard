import React from "react";
import Header from "../../components/common/Header";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import StatBox from "../../components/common/StatBox";
import LineCharts from "../../components/charts/Line/LineChart";
import ProgressCircle from "../../components/common/ProgressCircle";
import { tokens } from "../../theme";
import BarCharts from "../../components/charts/Bar/BarChart";
import { mockTransactions } from "../../data/mockData";
import ContactImage from "../../assets/anas.jpg";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Header title="DASHBOARD" subTitle="Welcome to your Dashboard" />
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid item xs={6} md={3} lg={3}>
          <StatBox
            icon="fa-regular fa-envelope"
            title="12,361"
            progress="0.70"
            increase="+14%"
            subtitle="Emails Sent"
          />
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <StatBox
            icon="fa-regular fa-cash-register"
            title="431,225"
            progress="0.21"
            increase="+21%"
            subtitle="Sales Obtained"
          />
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <StatBox
            icon="fa-solid fa-user-plus"
            title="32,441"
            progress="0.05"
            increase="+5%"
            subtitle="New Clients"
          />
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <StatBox
            icon="fa-solid fa-traffic-light"
            title=" 1,325,134"
            progress="0.43"
            increase="+43%"
            subtitle="Traffic Recieved"
          />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Stack sx={{ backgroundColor: colors.primary[400], p: 4 }}>
            <Header title="Revenue Generated" subTitle="$59,342" />
          </Stack>
          <LineCharts isDashboard={true} />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Stack backgroundColor={colors.primary[400]} height="100%">
            <Stack
              // alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="9px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Recent Transactions
              </Typography>
            </Stack>
            <Stack
              sx={{
                overflow: "auto",
                "&::-webkit-scrollbar": {
                  display: "none",
                  scrollbarWidth: "none",
                },
                height: "35vh",
              }}
            >
              {mockTransactions.map((transaction, i) => (
                <Stack
                  key={`${transaction.txId}-${i}`}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`1.5px solid ${colors.primary[300]}`}
                  p="15px"
                >
                  <Stack>
                    <Typography
                      color={colors.greenAccent[500]}
                      variant="h5"
                      fontWeight="600"
                    >
                      {transaction.txId}
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      {transaction.user}
                    </Typography>
                  </Stack>
                  <Stack color={colors.grey[100]}>{transaction.date}</Stack>
                  <Stack
                    backgroundColor={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                  >
                    ${transaction.cost}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Stack
            sx={{
              p: 4,
              backgroundColor: colors.primary[400],
              minHeight: "100px",
            }}
          >
            <Header title="Campaign" />
            <Stack
              alignItems="center"
              spacing={3}
              sx={{ pt: 2, minHeight: 220 }}
            >
              <ProgressCircle progress="0.75" size="110" />

              <Stack alignItems="center">
                <Typography
                  variant="h4"
                  sx={{ color: colors.greenAccent[500] }}
                >
                  $48352 revenue generated
                </Typography>
                <Typography variant="h5">
                  Includes extra misc expenditures and costs
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Stack
            sx={{ backgroundColor: colors.primary[400], maxHeight: "100px" }}
          >
            <Stack sx={{ p: 4 }}>
              <Header title="Sales Quantity" />
            </Stack>
            <BarCharts isDashboard={true} />
          </Stack>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Stack
            sx={{ backgroundColor: colors.primary[400], maxHeight: "100vh" }}
          >
            <Stack sx={{ p: 4 }}>
              <Header title="Contact Me" />
              <Stack
                alignItems="center"
                spacing={2}
                sx={{ pt: 1, minHeight: 220 }}
              >
                <img
                  src={ContactImage}
                  alt="contact-me"
                  style={{
                    width: 125,
                    height: 125,
                    borderRadius: "50%",
                    border: `4px solid ${colors.greenAccent[400]}`,
                    objectFit: "cover",
                  }}
                />
                <Stack spacing={0.5} alignItems="center">
                  <Typography
                    variant="h4"
                    sx={{ color: colors.greenAccent[500] }}
                  >
                    Anas ur Rehman
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    anasurrehman12@gmail.com
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
