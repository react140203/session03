import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>➕</button>
      <button onClick={() => setCount(count - 1)}>➖</button>
    </div>
  );
}
