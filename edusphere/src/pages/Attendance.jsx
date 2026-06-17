import React from "react";

export default function Attendance() {
  return (
    <div className="page">
      <div className="section">
        <h2>Attendance Overview</h2>

        <div className="card attendance">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
            alt="Attendance"
            className="card-img"
          />

          <h3>Current Attendance</h3>
          <p>82%</p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "82%" }}
            ></div>
          </div>

          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}
