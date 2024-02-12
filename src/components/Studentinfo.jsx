import React, { useState, useEffect } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://sindhuravuri666.github.io/StudentList/StudentList.json');
        if (!response.ok) {
          throw new Error('Failed to fetch student list');
        }
        const data = await response.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student list:', error);
        setError('Failed to fetch student list. Please try again later.');
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.RollNo}</td>
              <td>{student.Name}</td>
              <td>{student.EmailID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;


