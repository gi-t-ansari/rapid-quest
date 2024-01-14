import React from 'react'

import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryStack,
  } from "victory";
  
  
  const employeeContributionData = [
    { xAxis: 1, amount: 15 },
    { xAxis: 2, amount: 20 },
    { xAxis: 3, amount: 25 },
    { xAxis: 4, amount: 33 },
    { xAxis: 5, amount: 40 },
    { xAxis: 6, amount: 48 },
    { xAxis: 7, amount: 56 },
    { xAxis: 8, amount: 65 },
    { xAxis: 9, amount: 72 },
    { xAxis: 10, amount: 80 },
    { xAxis: 11, amount: 90 },
    { xAxis: 12, amount: 95 },
    { xAxis: 13, amount: 100 },
  ];
  
  const employerContributionData = [
    { xAxis: 1, amount: 15 },
    { xAxis: 2, amount: 20 },
    { xAxis: 3, amount: 25 },
    { xAxis: 4, amount: 33 },
    { xAxis: 5, amount: 40 },
    { xAxis: 6, amount: 50 },
    { xAxis: 7, amount: 60 },
    { xAxis: 8, amount: 72 },
    { xAxis: 9, amount: 84 },
    { xAxis: 10, amount: 94 },
    { xAxis: 11, amount: 105 },
    { xAxis: 12, amount: 110 },
    { xAxis: 13, amount: 115 },
  ];
  
  const totalInterestData = [
    { xAxis: 1, amount: 30 },
    { xAxis: 2, amount: 40 },
    { xAxis: 3, amount: 50 },
    { xAxis: 4, amount: 55 },
    { xAxis: 5, amount: 65 },
    { xAxis: 6, amount: 70 },
    { xAxis: 7, amount: 75 },
    { xAxis: 8, amount: 85 },
    { xAxis: 9, amount: 95 },
    { xAxis: 10, amount: 100 },
    { xAxis: 11, amount: 115 },
    { xAxis: 12, amount: 110 },
    { xAxis: 13, amount: 105 },
  ];

function Chart1() {
  return (
    <>
        <VictoryChart
            domainPadding={50}
            theme={VictoryTheme.material}
            height={350}
            width={1000}
          >
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
              tickFormat={[20, "", 25, "", 30, "", 35, "", 40, "", 60, "", 65]}
            />
            <VictoryAxis dependentAxis tickFormat={(x) => `$${x}`} />
            <VictoryStack colorScale={"blue"}>
              <VictoryBar
                data={employeeContributionData}
                x="xAxis"
                y="amount"
                barWidth={25}
                style={{ fontSize: "40px" }}
              />
              <VictoryBar
                data={employerContributionData}
                x="xAxis"
                y="amount"
                barWidth={25}
              />
              <VictoryBar
                data={totalInterestData}
                x="xAxis"
                y="amount"
                barWidth={25}
              />
            </VictoryStack>
          </VictoryChart>
    </>
  )
}

export default Chart1