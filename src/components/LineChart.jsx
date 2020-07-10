import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "04/07",
    levels: 140,
    target: 110
  },
  {
    name: "05/07",
    levels: 130,
    target: 110
  },
  {
    name: "06/07",
    levels: 120,
    target: 110
  },
  {
    name: "07/07",
    levels: 127,
    target: 110
  },
  {
    name: "08/07",
    levels: 129,
    target: 110
  },
  {
    name: "09/07",
    levels: 130,
    target: 110
  },
  {
    name: "10/07",
    levels: 135,
    target: 110
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[70,170]} type="number" datakey="levels" />
          <Tooltip />
          <Line
            activeDot={{ r: 8 }}
            type="monotone"
            dataKey="levels"
            stroke="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="red"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
