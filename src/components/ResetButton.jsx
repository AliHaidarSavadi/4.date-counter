export default function ResetButton({ step, count, reset }) {
  return (
    <>{(step !== 1 || count !== 0) && <button onClick={reset}>reset</button>}</>
  );
}
