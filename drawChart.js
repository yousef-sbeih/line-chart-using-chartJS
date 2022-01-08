export function drawChart(
  canId,
  xAxis,
  yAxis,
  {
    labelText = "Line Chart",
    width = 500,
    height = 500,
    backgroundColor = "red",
    borderColor = "blue",
    showLine = true,
  }
) {
  let canvElement = document.getElementById(canId);
  if (canvElement) {
    let div = canvElement.parentNode;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;

    let lineChart = new Chart(canvElement, {
      type: "line",
      data: {
        labels: xAxis,
        datasets: [
          {
            label: labelText,
            data: yAxis,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            showLine: showLine,
          },
        ],
      },
    });
  } else {
    throw new Error("the canvas element is wrong , try to enter an valid ID");
  }
}
