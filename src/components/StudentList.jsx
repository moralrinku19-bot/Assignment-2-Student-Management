
import { useState } from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  const [sorted, setSorted] = useState(false);

  const sortedStudents = [...students].sort((a, b) => {
    return sorted ? b.cgpa - a.cgpa : a.cgpa - b.cgpa;
  });

  return (
    <div className="student-list">
      <h2>Student List</h2>

      <button onClick={() => setSorted(!sorted)}>
        {sorted ? "Sort by Lowest CGPA" : "Sort by Highest CGPA"}
      </button>

      <div className="student-container">
        {sortedStudents.map((student) => (
          <StudentCard
            key={student.rollNo}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;