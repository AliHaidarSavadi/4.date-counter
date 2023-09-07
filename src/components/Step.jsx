import { useState } from "react";
import Count from "./Count";

export default function Step({ step, handleSetStep }) {
  return (
    <div className="step">
      <button onClick={() => handleSetStep((s) => (s > 1 && s - 1) || s)}>
        -
      </button>
      <strong>Step: {step}</strong>
      <button onClick={() => handleSetStep((s) => s + 1)}>+</button>
    </div>
  );
}
