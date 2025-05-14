"use client";

import { ReactNode, useState } from "react";

export function Counter({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <button
      className="mt-3 px-4 py-1 rounded-md border-2 border-blue-500 hover:bg-blue-500 hover:text-white"
      onClick={() => setCount((prev) => prev + 1)}
    >
      {`${children} +${count}`}
    </button>
  );
}
