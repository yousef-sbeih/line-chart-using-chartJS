import { drawChart } from "./drawChart";

const jsonData = await fetch("./data.json").then((res) => res.json());

console.log({ jsonData });
let labels = jsonData.map((d) => d.date);
let data = jsonData.map((d) => d.value);
drawChart("myChart", labels, data, {
  width: 1000,
  height: 500,
  borderColor: "green",
});
