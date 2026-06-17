import React from "react";
export default function Profile() {
  return (
    <div className="page">
      <div className="section profile-page">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
          alt="Profile"
          className="profile-img"
        />

        <h2>Ashwini</h2>
        <p>B-tech Student</p>

        <div className="profile-details">
          <p><strong>Email:</strong> ashwini@example.com</p>
          <p><strong>Semester:</strong> 4</p>
          <p><strong>Attendance:</strong> 82%</p>
        </div>

        <button>Edit Profile</button>
      </div>
    </div>
  );
}



