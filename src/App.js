import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  const [currentTime, setCurrentTime] = useState(new Date());

  setInterval(() => setCurrentTime(new Date()), 1000);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="step">
        <button onClick={() => setStep((s) => (s > 1 ? s - 1 : s))}>-</button>
        <strong>Step: {step}</strong>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <strong>Count: {count}</strong>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p className="message">
        <strong>
          {count > 0
            ? `${count} days from today is ${date.toDateString()}`
            : count < 0
            ? `${Math.abs(count)} days ago was ${date.toDateString()}`
            : `Today is ${date.toDateString()}`}
        </strong>
        <br />
        {currentTime.getHours()}:{currentTime.getMinutes()}:
        {currentTime.getSeconds()}
      </p>
    </div>
  );
}

export default App;
