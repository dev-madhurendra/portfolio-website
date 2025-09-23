import { useEffect, useState } from "react";

export function useCountUp(target: number, duration = 3000, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setCount(prev => (prev < target ? prev + 1 : target));
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return count;
}
