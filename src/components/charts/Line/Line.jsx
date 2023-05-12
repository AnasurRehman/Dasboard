import React from "react";
import LineCharts from "./LineChart";
import Header from "../../common/Header";

const Line = () => {
  return (
    <>
      <Header title="Line Chart" subTitle="Data for line chart" />
      <LineCharts />
    </>
  );
};

export default Line;
