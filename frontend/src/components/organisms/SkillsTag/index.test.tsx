import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillsTag from '.';
import { CHEVRON_LEFT_ROLE, CHEVRON_RIGHT_ROLE, SKILL_SECTION_TEST_ID, SKILL_TAG } from '../../../services/mocks/testMocks';

jest.mock('../../../services/apicalls/getcall', () => ({
  getSkillsTags: jest.fn(async () => ['React', 'Redux']),
}));

const resizeWindow = (width: number) => {
  global.innerWidth = width;
  fireEvent(window, new Event('resize'));
};

describe('SkillsTag component', () => {
  beforeEach(() => {
    render(<SkillsTag />);
  });

  it('renders correctly', async () => {

    await screen.findByTestId(SKILL_SECTION_TEST_ID);


    expect(screen.getByRole(CHEVRON_LEFT_ROLE)).toBeInTheDocument();
    expect(screen.getByRole(CHEVRON_RIGHT_ROLE)).toBeInTheDocument();
  });

  it('handles page change on button click', async () => {

    await screen.findByTestId(SKILL_SECTION_TEST_ID);


    expect(screen.getByRole(CHEVRON_LEFT_ROLE)).toBeInTheDocument();
    expect(screen.getByRole(CHEVRON_RIGHT_ROLE)).toBeInTheDocument();
    setInterval(() => {
        expect(screen.getByRole(SKILL_TAG+"0", { name: 'React' })).toBeInTheDocument();
    },100)


    fireEvent.click(screen.getByRole(CHEVRON_RIGHT_ROLE));


    expect(screen.getByRole(CHEVRON_LEFT_ROLE)).toBeInTheDocument();
    setInterval(() => {
        expect(screen.getByRole(SKILL_TAG+"1", { name: 'Redux' })).toBeInTheDocument();
    },100)
  });

  it('handles window resize correctly', async () => {

    await screen.findByTestId(SKILL_SECTION_TEST_ID);

    resizeWindow(1000);
    expect(screen.getByRole(CHEVRON_RIGHT_ROLE)).toBeInTheDocument();

    resizeWindow(768);
    expect(screen.getByRole(CHEVRON_RIGHT_ROLE)).toBeInTheDocument();

    resizeWindow(500);
    expect(screen.getByRole(CHEVRON_RIGHT_ROLE)).toBeInTheDocument();
  });

});
