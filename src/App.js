import { useState } from "react";
import Step from "./components/Step";
import Count from "./components/Count";
import Message from "./components/Message";
import ResetButton from "./components/ResetButton";
import CurrentTime from "./components/CurrentTime";

function App() {
  // states
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  //function for setting states and passing as props
  function addStep(value) {
    setStep(value);
  }

  function addCount() {
    setCount((c) => c + step);
  }

  function addCountByType(value) {
    setCount(value);
  }

  function subtractCount() {
    setCount((c) => c - step);
  }

  function reset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Step step={step} addStep={addStep} />
      <Count
        step={step}
        count={count}
        addCount={addCount}
        subtractCount={subtractCount}
        addCountByType={addCountByType}
      />
      <Message count={count} />
      <ResetButton step={step} count={count} reset={reset} />
      <CurrentTime />
    </div>
  );
}

export default App;
