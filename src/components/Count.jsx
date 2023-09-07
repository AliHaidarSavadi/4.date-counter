export default function Count({
  step,
  count,
  addCount,
  subtractCount,
  addCountByType,
}) {
  return (
    <div className="count">
      <button onClick={subtractCount}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => addCountByType(Number(e.target.value) || 0)}
      />
      <button onClick={addCount}>+</button>
    </div>
  );
}
