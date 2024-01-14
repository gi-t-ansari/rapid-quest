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
    { xAxis: 3, amount: 25 },
    { xAxis: 5, amount: 40 },
    { xAxis: 7, amount: 56 },
    { xAxis: 9, amount: 72 },
    { xAxis: 11, amount: 90 },
    { xAxis: 13, amount: 100 },
  ];
  
  const employerContributionData = [
    { xAxis: 1, amount: 15 },
    { xAxis: 3, amount: 25 },
    { xAxis: 5, amount: 40 },
    { xAxis: 7, amount: 60 },
    { xAxis: 9, amount: 84 },
    { xAxis: 11, amount: 105 }, 
    { xAxis: 13, amount: 115 },
  ];
  
  const totalInterestData = [
    { xAxis: 1, amount: 30 },
    { xAxis: 3, amount: 50 },
    { xAxis: 5, amount: 65 },
    { xAxis: 7, amount: 75 },
    { xAxis: 9, amount: 95 },
    { xAxis: 11, amount: 115 },
    { xAxis: 13, amount: 105 },
  ];

function Chart2() {
  return (
    <>
        <VictoryChart
            domainPadding={50}
            theme={VictoryTheme.material}
            height={350}
            width={500}
          >
            <VictoryAxis
              tickValues={[1, 3, 5, 7, 9, 11, 13]}
              tickFormat={[20, 35, 40, 45, 50, 55, 60]}
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

export default Chart2;