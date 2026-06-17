import React from "react";
export default function CourseCard({ title, credits, icon }) {
  return (
    <div className="course-card">
      {icon && <img src={icon} alt={title} className="course-img" />}
      <h4>{title}</h4>
      <p>Credits: {credits}</p>
      <button>Your Note</button>
    </div>
  );
}

