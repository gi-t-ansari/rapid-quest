import React from "react";
import "./Strategy.css";
import Slider from "@mui/material/Slider";
import Comparison from "../Comparison/Comparison";
import CloseIcon from '@mui/icons-material/Close';


function Strategy() {
  return (
    <section className="strategy-container">
      <div id="strategy-comparison">
        <button>
            <CloseIcon />
        </button>
        <Comparison />
      </div>
      <article>
        <h4>Retirement Strategy</h4>
        <div>
          <p>Employee Contribution</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Slider
              defaultValue={55}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{ flexBasis: "80%" }}
            />
            <span style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
              12%
            </span>
          </div>
        </div>
        <div>
          <p>Retirement Age</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Slider
              defaultValue={65}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{ flexBasis: "80%" }}
            />
            <span style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
              65
            </span>
          </div>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Employer Contribution</p>
          <p>8.4%</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Interest Rate</p>
          <p>5%</p>
        </div>
        <div className="help-section">
          <button>Update</button>
          <a href="#">{`View Help Desk >`}</a>
        </div>
      </article>
      <div>
        <span>Are you considering a</span>
        <h4>Housing Advance?</h4>
        <p>Limited time reduced interest.</p>
        <a href="#">{`Learn More >`}</a>
      </div>
    </section>
  );
}

export default Strategy;
