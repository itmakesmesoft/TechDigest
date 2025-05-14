"use client";

import { useEffect } from "react";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // 에러 로깅 서비스에 에러 보고
    console.error(error);
  }, [error]);

  return (
    <div className="error-container">
      <h2>문제가 발생했습니다</h2>
      <p>페이지를 불러오는 중 오류가 발생했습니다.</p>
      <button onClick={reset}>다시 시도</button>
    </div>
  );
}
