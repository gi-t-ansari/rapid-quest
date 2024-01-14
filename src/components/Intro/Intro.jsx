import React, { useState } from "react";
import "./Intro.css";
import avatar from "../../assets/avatar.jpg";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";

function Intro() {
  const [preference, setPreference] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setPreference(e.target.value);
  };

  return (
    <section className="intro-container">
      <header className="intro-header">
        <div className="avatar-container">
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
        <div className="greeting-section">
          <h4>Hi Mike,</h4>
          <p>welcome back.</p>
        </div>
      </header>
      <section className="today-summary">
        <div>
          <div style={{flexBasis: "100%"}}>
            <h6>Today</h6>
            <h3>$19,892</h3>
            <p>Account Balance</p>
          </div>
          <div>
            <h5>$4000</h5>
            <p>Year-to-Date <span>Contribution</span></p>
          </div>
          <div>
            <h5>$1892</h5>
            <p>Total Interest</p>
          </div>
        </div>
        <select onChange={handleChange} value={preference}>
          <option>I want to</option>
          <option value="save">Save</option>
          <option value="invest">Invest</option>
        </select>
      </section>
      <section className="transaction-section">
        <h6>Recent Transactions</h6>
        <div>
          <p>2020-08-07</p>
          <h4>Withdrawal Transfer to Bank-XXX11</h4>
          <hr />
        </div>
        <div>
          <p>2020-07-21</p>
          <h4>Withdrawal Transfer to Bank-XXX11</h4>
          <hr />
        </div>
        <div>
          <p>2020-07-16</p>
          <h4>Withdrawal Transfer to Bank-XXX11</h4>
          <hr />
        </div>
      </section>
    </section>
  );
}

export default Intro;
