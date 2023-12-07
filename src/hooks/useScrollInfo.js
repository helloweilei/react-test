import { useEffect, useState } from 'react';

export default (wrapperRef) => {
  const [scrollInfo, setScrollInfo] = useState({ scrollRatio: 0 });
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("bind scroll");
    const onScroll = (e) => {
      const container = e.target;
      const maxScroll = container.scrollHeight - container.offsetHeight;
      setScrollInfo({
        scrollRatio: (container.scrollTop / maxScroll),
      });
    };
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('scroll', onScroll);
    }

    return () => {
      wrapperRef.current?.removeEventListener('scroll', onScroll);
    };
  }, [wrapperRef]);

  return scrollInfo;
};