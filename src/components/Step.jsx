import { useState } from "react";
import Count from "./Count";

export default function Step() {
  const [step, setStep] = useState(1);

  return (
    <>
      <div className="step">
        <button onClick={() => setStep((s) => (s > 1 && s - 1) || s)}>-</button>
        <strong>Step: {step}</strong>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <Count step={step} />
    </>
  );
}
