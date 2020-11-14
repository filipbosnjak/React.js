import { useState, useLayoutEffect, useRef } from "react";

export const UseWidth = ({ on = true } = {}) => {
  const ref = useRef(); //Here we will store ref to the observed element
  const [width, setWidth] = useState(0);
  const widthRef = useRef(width);

  const [ro] = useState(() => {
    return new ResizeObserver((packet) => {
      //Sync current widht and new width
      if (ref.current && widthRef.current !== ref.current.offsetWidth) {
        widthRef.current = ref.current.offsetWidth;
        console.log(ref.current.offsetWidth);
        setWidth(ref.current.offsetWidth);
      }
    });
  });

  useLayoutEffect(() => {
    if (on && ref.current) {
      setWidth(ref.current.offsetWidth);
      ro.observe(ref.current, {});
    }
    return () => ro.disconnect(); //Clean up after its unmounted
  }, [on, ro]);
  return [ref, width];
};
