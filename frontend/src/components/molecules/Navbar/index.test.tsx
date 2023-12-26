// HomeIconsList.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import { ICON_COMPONENT_HOME } from '../../../utils/constants';
import { DarkModeProvider } from '../../../services/context/DarkMode';
import Navbar from '.';

describe('HomeIconsList', () => {
  it('renders without crashing', () => {
      render(<DarkModeProvider><Navbar /></DarkModeProvider>);
      const getHomeIconList = screen.getByTestId(ICON_COMPONENT_HOME)
      expect(getHomeIconList).toBeInTheDocument()
  });

});
