import ChartBar from "./ChartBar.js";
import "./Chart.css";
export const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((ObjectElm) => ObjectElm.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
          key={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
