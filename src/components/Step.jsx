export default function Step({ step, addStep, subtractStep }) {
  return (
    <div className="step">
      <button onClick={subtractStep}>-</button>
      <strong>Step: {step}</strong>
      <button onClick={addStep}>+</button>
    </div>
  );
}
