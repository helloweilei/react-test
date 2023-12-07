import { useEffect, useState, useCallback } from 'react';
import { useThrottle } from './useThrottle';

export default (wrapperRef) => {
  const [scrollInfo, setScrollInfo] = useState({ scrollRatio: 0 });
  const onScroll = useCallback((e) => {
    const container = e.target;
    const maxScroll = container.scrollHeight - container.offsetHeight;
    setScrollInfo({
      scrollRatio: (container.scrollTop / maxScroll),
    });
  });
  const throttledScroll = useThrottle(onScroll, 20);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("bind scroll");
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('scroll', throttledScroll);
    }

    return () => {
      wrapperRef.current?.removeEventListener('scroll', throttledScroll);
    };
  }, [wrapperRef, throttledScroll]);

  return scrollInfo;
};