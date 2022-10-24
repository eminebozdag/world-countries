import { Bar } from "@ant-design/plots";
import React, { useContext } from "react";
import { DataContext } from "./bar-context";
const DemoBar = () => {
  const { data } = useContext(DataContext);

  const config = {
    data,
    xField: "value",
    yField: "type",
    seriesField: "type",
    color: "rgb(138, 255, 222)",
    legend: false,
    meta: {
      type: {
        alias: "name",
      },
      value: {
        alias: "quantity",
      },
    },
  };
  return <Bar {...config} />;
};
export default DemoBar;
