import React from "react";
import { useState } from "react";
import { Progress } from "antd";

function Comparison() {
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
    <div className="income-comparison">
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
              size={70}
              strokeColor="#22d6aa"
              strokeWidth={10}
            />
            <h6>Average</h6>
          </div>
          <div>
            <Progress
              type="circle"
              percent={95}
              size={70}
              strokeColor="#22d6aa"
              strokeWidth={10}
            />
            <h6>Top</h6>
          </div>
          <div>
            <Progress
              type="circle"
              percent={59}
              size={70}
              strokeColor="#22d6aa"
              strokeWidth={10}
            />
            <h6>Me</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comparison;
