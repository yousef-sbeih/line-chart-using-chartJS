export function drawChart(
  canId,
  jsonData,

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
    let labels = jsonData.map((d) => d.date);
    let data = jsonData.map((d) => d.value);

    let lineChart = new Chart(canvElement, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: labelText,
            data: data,
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
