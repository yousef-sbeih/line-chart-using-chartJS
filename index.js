import { drawChart } from "./drawChart";
import jsonData from "./data.json";

drawChart("myChart", jsonData, {
  width: 1000,
  height: 500,
  borderColor: "green",
  showLine: true,
});
