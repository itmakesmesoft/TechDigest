"use client";

import { ReactNode, useState } from "react";

export function Counter({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      {children}
      {count}
    </button>
  );
}
