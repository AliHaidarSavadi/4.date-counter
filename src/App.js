import { useState } from "react";
import Step from "./components/Step";
import Count from "./components/Count";
import Message from "./components/Message";
import CurrentTime from "./components/CurrentTime";

function App() {
  // states
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  //function for setting states and passing as props
  function addStep() {
    setStep((s) => s + 1);
  }

  function subtractStep() {
    setStep((s) => (s > 1 && s - 1) || s);
  }

  function addCount() {
    setCount((c) => c + step);
  }

  function subtractCount() {
    setCount((c) => c - step);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Step step={step} addStep={addStep} subtractStep={subtractStep} />
      <Count
        step={step}
        count={count}
        addCount={addCount}
        subtractCount={subtractCount}
      />
      <Message count={count} />
      <CurrentTime />
    </div>
  );
}

export default App;
