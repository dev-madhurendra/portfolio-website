// HomeIconsList.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import HomeIconsList from '.';
import { ICON_COMPONENT_HOME } from '../../../utils/constants';
import { DarkModeProvider } from '../../../services/context/DarkMode';

describe('HomeIconsList', () => {
  it('renders without crashing', () => {
      render(<DarkModeProvider><HomeIconsList /></DarkModeProvider>);
      const getHomeIconList = screen.getByTestId(ICON_COMPONENT_HOME)
      expect(getHomeIconList).toBeInTheDocument()
  });

});
