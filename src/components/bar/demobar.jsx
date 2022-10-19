import { Bar } from "@ant-design/plots";
import React from "react";

const DemoBar = () => {
  const data = [
    {
      type: "家具家电",
      sales: 38,
    },
    {
      type: "粮油副食",
      sales: 52,
    },
    {
      type: "生鲜水果",
      sales: 61,
    },
    {
      type: "美容洗护",
      sales: 145,
    },
    {
      type: "母婴用品",
      sales: 48,
    },
    {
      type: "进口食品",
      sales: 38,
    },
    {
      type: "食品饮料",
      sales: 38,
    },
    {
      type: "家庭清洁",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "sales",
    yField: "type",
    seriesField: "type",
    color: "rgb(138, 255, 220)",
    legend: false,
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
  };
  return <Bar {...config} />;
};
export default DemoBar;
