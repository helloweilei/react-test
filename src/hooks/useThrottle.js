import { useRef } from "react";

export function throttle(fn, delay) {
  let scheduled = false;
  return function throttleFn (...args) {
    if (!scheduled) {
      fn.apply(this, args);
      setTimeout(() => {
        scheduled = false;
      }, delay);
      scheduled = true;
    }
  }
}

export function throttle2(fn, delay) {
  let lastTime = 0;
  let lastFn = null;
  let runLastFnTimer = null;

  return function throttleFn(...args) {
    const timeElapsed = Date.now() - lastTime;
    if (timeElapsed > delay) {
      fn.apply(this, args);
      lastTime = Date.now();
      lastFn = null;
      if (runLastFnTimer) {
        clearTimeout(runLastFnTimer);
      }
      runLastFnTimer = setTimeout(() => {
        if (lastFn) {
          // eslint-disable-next-line no-console
          console.log("trailing fun called");
          lastFn();
        }
        runLastFnTimer = null;
      }, delay * 2);
    } else {
      lastFn = fn.bind(this, ...args);
    }
  }
}

export function useThrottle(fn, delay) {

  const ref = useRef();

  if (!ref.current) {
    ref.current = throttle2(fn, delay);
  }

  return ref.current;
}