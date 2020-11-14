import "./App.css";
import { useSpring, animated, config } from "react-spring";
import Component from "./Component";
import { useState } from "react";
import { useHeight } from "./UseHeight";
import { UseWidth } from "./UseWidth";

import React from "react";

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [show, setShow] = useState(true);

  const fade = useSpring({
    sconfig: { ...config.low }, // cofig.woobly , stiff , slow...
    from: { opacity: 0 },
    to: {
      opacity: show ? 1 : 0,
    },
  });

  const [heightRef, height] = useHeight();
  const [widhtRef, width] = UseWidth();

  const slideInHeight = useSpring({
    config: { ...config.slow },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: show ? 1 : 0,
      height: show ? height : 0, //Height goes from 0 to heigh we get from useHeigh custom hook
    },
  });

  const sleidInWidth = useSpring({
    config: { ...config.slow },
    from: { opacity: 0, width: 0 },
    to: {
      opacity: show ? 1 : 0,
      width: show ? width : 0,
    },
  });
  const animatedNumber = useSpring({
    config: { ...config.slow },
    number: 100,
    from: { number: 1 },
  });

  return (
    <React.Fragment>
      <animated.div style={props}>
        <Component />
        <animated.div style={fade}>Hola!</animated.div>
        <button onClick={() => setShow((current) => !current)}>Toggle</button>
      </animated.div>
      <animated.div style={{ ...slideInHeight, overflow: "hidden" }}>
        <div ref={heightRef}>
          This content will fade in and fade out with sliding Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ducimus eligendi obcaecati
          iusto in, reprehenderit fugit ad, nulla illo suscipit, id aliquam?
          Magnam quaerat sit dolores. Numquam reprehenderit impedit excepturi
          quas?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quisquam aliquam sunt veniam odio, corporis libero in iure aut fuga
          doloremque nostrum, tempora quia corrupti officiis iste repellendus?
          Amet, vitae repellendus!
        </div>
      </animated.div>
      <animated.div style={{ ...sleidInWidth }}>
        <div>
          This content will fade in and fade out with sliding Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ducimus eligendi obcaecati
          iusto in, reprehenderit fugit ad, nulla illo suscipit, id aliquam?
          Magnam quaerat sit dolores. Numquam reprehenderit impedit excepturi
          quas?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quisquam aliquam sunt veniam odio, corporis libero in iure aut fuga
          doloremque nostrum, tempora quia corrupti officiis iste repellendus?
          Amet, vitae repellendus!
        </div>
      </animated.div>
      <animated.div>{animatedNumber.number}</animated.div>
    </React.Fragment>
  );
}

export default App;
