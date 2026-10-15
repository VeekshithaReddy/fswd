
import React from "react";

function App() {
  const employees = [
    { id: 1, name: "Rahul", department: "IT", salary: 60000 },
    { id: 2, name: "Priya", department: "HR", salary: 45000 },
    { id: 3, name: "Arjun", department: "Sales", salary: 55000 },
    { id: 4, name: "Sneha", department: "Finance", salary: 40000 }
  ];

  return (
    <div>
      <h2>Employee Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp.id}
              style={{
                backgroundColor:
                  emp.salary > 50000 ? "lightgreen" : "white"
              }}
            >
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
