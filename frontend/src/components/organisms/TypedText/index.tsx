import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { getTypedTextOptions } from '../../../services/mocks/mocks';
import { TYPED_TEXT_TEST_ID } from '../../../services/mocks/testMocks';

const TypedText = (props: { text: string }) => {
  const el = useRef(null);

  useEffect(() => {
    const options = getTypedTextOptions(props.text)
    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, [props.text]);

  return <h4 ref={el} data-tesid={TYPED_TEXT_TEST_ID}></h4>;
};

export default TypedText;
