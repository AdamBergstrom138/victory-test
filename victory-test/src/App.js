import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryLabel } from 'victory';

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];

const dataA = [
  { x: "Personal Drones", y: 57 },
  { x: "Smart Thermostat", y: 40 },
  { x: "Television", y: 38 },
  { x: "Smartwatch", y: 37 },
  { x: "Fitness Monitor", y: 25 },
  { x: "Tablet", y: 19 },
  { x: "Camera", y: 15 },
  { x: "Laptop", y: 13 },
  { x: "Phone", y: 12 }
];

const dataB = dataA.map((point) => {
  const y = Math.round(point.y + 3 * (Math.random() - 0.5));
  return { ...point, y };
});

const width = 400;
const height = 400;





function App() {
  return (
    <div className="App">
      <h1>Victory Graph Test</h1>
      <VictoryChart 
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryStack>
          <VictoryBar
            data={data2012}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2013}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2014}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2015}
            x="quarter"
            y="earnings"
          />
        </VictoryStack>
      </VictoryChart>
 
      <VictoryChart horizontal
        height={height}
        width={width}
        padding={40}
      >
        <VictoryStack
          style={{ data: { width: 25 }, labels: { fontSize: 15 } }}
        >
          <VictoryBar
            style={{ data: { fill: "tomato" } }}
            data={dataA}
            y={(data) => (-Math.abs(data.y))}
            labels={({ datum }) => (`${Math.abs(datum.y)}%`)}
          />
          <VictoryBar
            style={{ data: { fill: "orange" } }}
            data={dataB}
            labels={({ datum }) => (`${Math.abs(datum.y)}%`)}
          />
        </VictoryStack>
        <VictoryAxis
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fontSize: 15, fill: "black" }
          }}
          /*
            Use a custom tickLabelComponent with
            an absolutely positioned x value to position
            your tick labels in the center of the chart. The correct
            y values are still provided by VictoryAxis for each tick
          */
            tickLabelComponent={
              <VictoryLabel
                x={width / 2}
                textAnchor="middle"
              />
            }
            tickValues={dataA.map((point) => point.x).reverse()}
          />
        </VictoryChart>
    </div>
  );
}

export default App;



// class Main extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Victory Tutorial</h1>
//       </div>
//     );
//   }
// }

// const app = document.getElementById('app');
// ReactDOM.render(<Main />, app);