import { useState, useLayoutEffect, useRef } from "react";

//Watches element with a passed ref and returns its heigh
export const useHeight = ({ on = true /* true by default*/ } = {}) => {
  const ref = useRef();
  const [height, setHeight] = useState(0);
  const heightRef = useRef(height); //heightRef initialized to height

  const [ro] = useState(
    () =>
      new ResizeObserver((packet) => {
        //ResizeObserver - reports changes of the dimensions of a chosen observed DOM element
        if (ref.current && heightRef.current !== ref.current.offsetHeight) {
          heightRef.current = ref.current.offsetHeight;
          setHeight(ref.current.offsetHeight);
        }
      })
  );
  useLayoutEffect(() => {
    if (on && ref.current) {
      setHeight(ref.current.offsetHeight);
      ro.observe(ref.current, {});
    }
    return () => ro.disconnect();
  }, [on, ro]);

  return [ref, height];
};
