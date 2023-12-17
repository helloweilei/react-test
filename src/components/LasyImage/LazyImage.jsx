import { useEffect, useState, useRef } from "react";
import React from "react";

const LazyImage = (props) => {
  const [imgSrc, setImgSrc] = useState(undefined);

  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries[0]);
        if (entries[0].isIntersecting) {
          setImgSrc(props.src);
          observer.unobserve(imageRef.current);
        }
      },
      { rootMargin: "0px 0px 100px 0px" }
    );

    observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, [props.src]);

  return <img ref={imageRef} height={props.height ?? 400} src={imgSrc}></img>;
};

export default LazyImage;
