import { useState } from "react";
import Message from "./Message";

export default function Count({ step }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <strong>Count: {count}</strong>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <Message count={count} />
    </>
  );
}
