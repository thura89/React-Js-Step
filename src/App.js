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
          <Step step={step}>{messages[step - 1]}</Step>

          <div className="buttons">
            {/* <button
              onClick={() => previousHandling()}
              style={{ backgroundColor: "#7950f2", color: "#7950f2" }}
            >
              Previous
            </button> */}
            {/* <button
              onClick={() => nextHandling()}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button> */}
            <Button
              bgColor="#7950f2"
              fontColor="#fff"
              onClicker={previousHandling}
            >
              Previous
            </Button>
            <Button bgColor="#7950f2" fontColor="#fff" onClicker={nextHandling}>
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
const Button = ({ bgColor, fontColor, onClicker, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: fontColor }}
      onClick={onClicker}
    >
      {children}
    </button>
  );
};
const Step = ({ step, children }) => {
  return (
    <div className="message">
      <p>
        <h1>Step {step}: </h1>
        {children}
      </p>
    </div>
  );
};
export default App;
