import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

import studentGirl from "../assets/student.girl.png";
function Home() {
  return (
    <div className="home">

      {/* Welcome Section */}
      <section className="welcome">
        <div className="welcome-text">
          <h2>Welcome, Ashwini!</h2>
          <p>Empower your learning journey</p>
        </div>

        <div className="welcome-illustration">

          <img
            src={studentGirl}
            alt="Student Girl"
            className="illustration-main"
          />

          <div className="illustration-extra">
            <img
              src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
              alt="Books"
              className="illustration-books"
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/702/702797.png"
              alt="Idea"
              className="illustration-bulb"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="dashboard-panels">

        <div className="panel courses">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Courses"
            className="panel-img"
          />
          <h3>My Courses</h3>
          <p>3 Enrolled Courses</p>
          <Link to="/courses">
            <button>View Courses</button>
          </Link>
        </div>

        <div className="panel attendance">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
            alt="Attendance"
            className="panel-img"
          />
          <h3>Attendance</h3>
          <p>82% Attendance</p>
          <Link to="/attendance">
            <button>Track Attendance</button>
          </Link>
        </div>

        <div className="panel notes">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
            alt="Notes"
            className="panel-img"
          />
          <h3>Notes</h3>
          <p>5 Saved Notes</p>
          <Link to="/notes">
            <button>View Notes</button>
          </Link>
        </div>

        <div className="panel profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt="Profile"
            className="panel-img"
          />
          <h3>Profile</h3>
          <p>Update Your Info</p>
          <Link to="/profile">
            <button>Edit Profile</button>
          </Link>
        </div>

      </section>

      {/* Recent Courses + Notes */}
      <section className="dashboard-sections">

        <div className="section recent-courses">
          <h2>Recent Courses</h2>

          <div className="course-list">

            <div className="course-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React"
                className="course-img"
              />
              <h4>React Basics</h4>
              <p>Credits: 3</p>
              <button>Your Note</button>
            </div>

            <div className="course-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
                alt="Statistics"
                className="course-img"
              />
              <h4>Business Statistics</h4>
              <p>Credits: 4</p>
              <button>Your Note</button>
            </div>

          </div>
        </div>

        <div className="section quick-note">
          <h2>Quick Note</h2>

          <textarea
            placeholder="Write a quick note..."
            rows="6"
          ></textarea>

          <button>Add Note</button>
        </div>

      </section>

      {/* Announcements */}
      <section className="announcements">
        <h2>Announcements</h2>

        <ul>
          <li>📢 Exam schedule updated. Check the Courses page for details.</li>
          <li>📚 New study resources available in the Notes section.</li>
          <li>✅ Attendance records updated for this week.</li>
        </ul>
      </section>

    </div>
  );
}

export default Home;



