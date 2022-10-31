import { Bar } from "@ant-design/plots";
import React from "react";

const DemoBar = ({ data }) => {
  const config = {
    data,
    xField: "value",
    yField: "type",
    seriesField: "type",
    color: "rgb(138, 255, 220)",
    legend: false,
    meta: {
      type: {
        alias: "类别",
      },
      value: {
        alias: "销售额",
      },
    },
  };
  return <Bar {...config} />;
};
export default DemoBar;
