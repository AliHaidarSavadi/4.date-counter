import { useState } from "react";
import Step from "./components/Step";
import Count from "./components/Count";
import Message from "./components/Message";
import CurrentTime from "./components/CurrentTime";

function App() {
  // states
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <Step step={step} handleSetStep={setStep} />
      <Count step={step} count={count} handleSetCount={setCount} />
      <Message count={count} />
      <CurrentTime />
    </div>
  );
}

export default App;
