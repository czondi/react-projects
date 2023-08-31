import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            placeholder="#f15025"
            className={error ? "error" : null}
          />
          <input
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor key={index} index={index} {...color} />
        ))}
      </section>
    </>
  );
}

export default App;
