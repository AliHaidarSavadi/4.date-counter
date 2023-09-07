export default function Count({ step, count, addCount, subtractCount }) {
  return (
    <div className="count">
      <button onClick={subtractCount}>-</button>
      <strong>Count: {count}</strong>
      <button onClick={addCount}>+</button>
    </div>
  );
}
