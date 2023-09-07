import { useState } from "react";
import Message from "./Message";

export default function Count({ step, count, handleSetCount }) {
  return (
    <div className="count">
      <button onClick={() => handleSetCount((c) => c - step)}>-</button>
      <strong>Count: {count}</strong>
      <button onClick={() => handleSetCount((c) => c + step)}>+</button>
    </div>
  );
}
