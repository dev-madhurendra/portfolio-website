import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import EducationDetail from '.';
import { educationPropsTest } from '../../../services/mocks/testMocks';

describe('Education Detilas', () => {
    it('should renders EducationDetail component with correct data', () => {
        const { getByText, getByAltText } = render(<EducationDetail {...educationPropsTest} />);

        setInterval(() => {
            expect(getByText(/Test School/i)).toBeInTheDocument();
            expect(getByText(/90%/i)).toBeInTheDocument();
            expect(getByText(/2020-01-01 - 2021-01-01/i)).toBeInTheDocument();
            expect(getByText(/Test Location/i)).toBeInTheDocument();
            expect(getByText(/Test Description/i)).toBeInTheDocument();
            expect(getByAltText(/Education Image/i)).toBeInTheDocument();
        },100)
    });
})