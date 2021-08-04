import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Tag from './Tag';

describe('Tag', () => {
    test('renders Tag component', () => {
        const { getByText } = render(<Tag text={'1.0.0'} />);
        expect(getByText('1.0.0')).toBeInTheDocument();
    });
});
