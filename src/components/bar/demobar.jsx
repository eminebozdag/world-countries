import { Bar } from "@ant-design/plots";
import React from "react";

const DemoBar = ({ data }) => {
  const config = {
    data,
    xField: "value",
    yField: "type",
    seriesField: "type",
    color: "rgb(51, 255, 189)",
    legend: true,
    meta: {
      type: {
        alias: "title",
      },
      value: {
        alias: "rate",
      },
    },
  };
  return <Bar {...config} />;
};
export default DemoBar;
