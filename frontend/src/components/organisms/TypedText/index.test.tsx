import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TypedText from '.';
import { TYPED_TEXT_TEST_ID } from '../../../services/mocks/testMocks';


describe('TypedText Component', () => {
  it('renders without crashing', async () => {
    render(<TypedText text="Hello, World!" />);  
    setInterval(() => {
      const typedElement = screen.getByTestId(TYPED_TEXT_TEST_ID);
      expect(typedElement).toBeInTheDocument();
    },100)
  });

  it('displays the correct text', async () => {
    const text = "Testing the TypedText component"
    render(<TypedText text={text} />);
    setInterval(() => {
      const typedElement = screen.getByTestId(TYPED_TEXT_TEST_ID);
      expect(typedElement).toBeInTheDocument();
      expect(typedElement).toHaveTextContent(text);
    },100)
  });
});
