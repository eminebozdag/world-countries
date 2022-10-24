import { createContext } from "react";

const data = [
  {
    type: "asdfg",
    value: 38,
  },
  {
    type: "hey",
    value: 52,
  },
  {
    type: "mey",
    value: 61,
  },
  {
    type: "美容洗护",
    value: 145,
  },
  {
    type: "母婴用品",
    value: 48,
  },
  {
    type: "进口食品",
    value: 38,
  },
  {
    type: "食品饮料",
    value: 38,
  },
  {
    type: "家庭清洁",
    value: 38,
  },
];

const DataContext = createContext({
  data,
});

export { data, DataContext };
