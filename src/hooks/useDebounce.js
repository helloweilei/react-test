import { useRef } from "react";

export function debounce(fn, delay) {
  let timer = null;
  return function debounceFn(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

export default function useDebounce(fn, delay) {

  const ref = useRef(debounce(fn, delay));

  return ref.current;

}