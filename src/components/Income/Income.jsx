import React from "react";
import "./Income.css";
import Chart1 from "../Chart1/Chart1";
import Chart2 from "../Chart2/Chart2";
import Comparison from "../Comparison/Comparison";

function Income() {
  
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
          <div className="chart1">
            <Chart1 />
          </div>
          <div className="chart2">
            <Chart2 />
          </div>
        </div>
      </article>
      <div id="income-comparison">
        <Comparison />
      </div>
    </section>
  );
}

export default Income;
