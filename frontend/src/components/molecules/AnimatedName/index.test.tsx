import React from 'react';
import { render } from '@testing-library/react';
import AnimatedName from '.';
import "@testing-library/jest-dom"
import { NAME_ANIMATION } from '../../../utils/constants';

test('renders the AnimatedName component', () => {
  const { getByText, getAllByTestId } = render(<AnimatedName />);

  const imText = getByText("I'm");
  expect(imText).toBeInTheDocument();

  const nameLetters = getAllByTestId(NAME_ANIMATION);
  expect(nameLetters.length).toBeGreaterThan(0);

});
