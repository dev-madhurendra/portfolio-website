import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = ({ text = "" }: { text: string }) => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [text],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, [text]);

  return <div ref={el}></div>;
};

export default TypedText;
