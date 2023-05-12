import React from "react";
import Header from "../../common/Header";
import BarCharts from "./BarChart";

const Bars = () => {
  return (
    <>
      <Header title="Bar Chart" subTitle="Data for bar chart" />
      <BarCharts />
    </>
  );
};

export default Bars;
