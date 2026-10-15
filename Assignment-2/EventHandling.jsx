
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("lightblue");
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Event Handling</h2>

      <div
        onMouseOver={() => setColor("lightgreen")}
        onMouseOut={() => setColor("lightblue")}
        onDoubleClick={() => setMessage("Box double-clicked!")}
        style={{
          width: "250px",
          height: "100px",
          backgroundColor: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          marginBottom: "15px"
        }}
      >
        Hover or Double Click Me
      </div>

      <p>{message}</p>

      <h3>Keyboard Event</h3>
      <input
        type="text"
        placeholder="Press any key"
        onKeyDown={(event) => setKey(event.key)}
      />

      <p>Key pressed: {key}</p>

      <h3>Form Submission</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
