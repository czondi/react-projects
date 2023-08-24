import React from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Logging</h3>
        <section className="info">
          {data.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
