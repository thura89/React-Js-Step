import React, { useState } from "react";

const App = () => {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  const previousHandling = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const nextHandling = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  return (
    <>
      <button className="close" onClick={() => setisOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            <p> Step {`${step}: ${messages[step - 1]}`}</p>
          </div>
          <div className="buttons">
            <button
              onClick={() => previousHandling()}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={() => nextHandling()}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
