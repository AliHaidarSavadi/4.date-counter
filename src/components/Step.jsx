export default function Step({ step, addStep }) {
  return (
    <div className="step">
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => addStep(Number(e.target.value))}
      />
      <strong>{step}</strong>
    </div>
  );
}
