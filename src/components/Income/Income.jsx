import React, { useState } from "react";
import "./Income.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from "victory";
import { Progress } from "antd";

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

function Income() {
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [gender, setGender] = useState("");

  const getAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const getSalary = (e) => {
    e.preventDefault();
    setSalary(e.target.value);
  };

  const getGender = (e) => {
    e.preventDefault();
    setGender(e.target.value);
  };

  return (
    <section className="income-container">
      <header className="income-section-header">
        <p>Retirement Income</p>
        <h4>Starting Year 2056</h4>
      </header>
      <article className="income-summary">
        <div>
          <h3>$300,000</h3>
          <p>My Goal</p>
        </div>
        <div>
          <h3>59%</h3>
          <p>Goal Achieved</p>
        </div>
        <div>
          <h3>$300</h3>
          <p>Est. Monthly Income</p>
        </div>
      </article>
      <article className="chart-container">
        <h4 className="chart-header">Contributions Overtime</h4>
        <div className="chart-summary">
          <div>
            <span className="ellipse employee-ellipse"></span>
            <p>
              <span>Employer: </span>K 73,500
            </p>
          </div>
          <div>
            <span className="ellipse employer-ellipse"></span>
            <p>
              <span>Employee: </span>K 53,500
            </p>
          </div>
          <div>
            <span className="ellipse total-ellipse"></span>
            <p>
              <span>Total Interest: </span>K 244,313
            </p>
          </div>
        </div>
        <div className="chart">
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
        </div>
      </article>
      <footer className="income-footer">
          <h5>How do I compare my peers?</h5>
          <p>These numbers represent current goal achievement</p>
        <div>
          <form>
            <label htmlFor="age">Age: </label>
            <select onChange={getAge} value={age} id="age">
              <option value="under 30">Under 30</option>
              <option value="under 40">Under 40</option>
              <option value="under 50">Under 50</option>
            </select>
            <hr />
            <label htmlFor="salary">Salary: </label>
            <select onChange={getSalary} value={salary} id="salary">
              <option value="K20 - K30">K20 - K30</option>
              <option value="K30 - K40">K30 - K40</option>
              <option value="K40 - K50">K40 - K50</option>
            </select>
            <hr />
            <label htmlFor="gender">Gender: </label>
            <select onChange={getGender} value={gender} id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <hr id="last-hr" />
          </form>
          <div>
            <div>
            <Progress
              type="circle"
              percent={78}
              size={100}
              strokeColor="#22d6aa"
              strokeWidth={10}
            />
            <h6>Average</h6>
            </div>
            <div>
            <Progress
              type="circle"
              percent={95}
              size={100}
              strokeColor="#22d6aa"
              strokeWidth={10}
            />
            <h6>Top</h6>
            </div>
            <div>
            <Progress
              type="circle"
              percent={59}
              size={100}
              strokeColor="#22d6aa"
              strokeWidth={10}
            />
            <h6>Me</h6>
            </div>
            
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Income;
