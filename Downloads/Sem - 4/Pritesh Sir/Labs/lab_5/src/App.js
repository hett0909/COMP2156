import React, { useState } from "react";
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { studentId, name, age, major };
    setStudents([...students, newStudent]);
    // Clear input fields after adding
    setStudentId("");
    setName("");
    setAge("");
    setMajor("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Information System</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Student ID:</label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter Student ID"
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Age"
            />
          </div>
          <div>
            <label>Major:</label>
            <input
              type="text"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              placeholder="Enter Major"
            />
          </div>
          <button type="submit">Add Student</button>
        </form>

        <h2>Student List</h2>
        <ul>
          {students.length === 0 ? (
            <li>No students added yet</li>
          ) : (
            students.map((student, index) => (
              <li key={index}>
                {student.studentId} - {student.name} - {student.age} - {student.major}
              </li>
            ))
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
