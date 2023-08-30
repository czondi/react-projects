import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const amount = parseInt(count, 10);
    const quotient = Math.floor(amount / data.length);
    const remainder = amount % data.length;

    const paragpraphs = [
      ...new Array(quotient).fill(data).flat(),
      ...data.slice(0, remainder),
    ];

    setText(paragpraphs);
  };

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          id="amount"
          name="amount"
          type="number"
          min={1}
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        <ol>
          {text.map((paragraph, index) => (
            <li key={index}>
              <p>{paragraph}</p>
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
}

export default App;
