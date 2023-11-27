import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherIcon from './WeatherIcon';
import { faSun, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Mock FontAwesomeIcon to simplify testing
jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: ({ icon }) => <span>{icon.iconName}</span>,
}));

describe('WeatherIcon', () => {
    it('displays the correct icon for "Warm"', () => {
        render(<WeatherIcon summary="Warm" />);
        expect(screen.getByText('sun')).toBeInTheDocument();
    });

    it('displays the correct icon for "Freezing"', () => {
        render(<WeatherIcon summary="Freezing" />);
        expect(screen.getByText('snowflake')).toBeInTheDocument();
    });

    it('displays a default icon for an unknown summary', () => {
        render(<WeatherIcon summary="Unknown" />);
        expect(screen.getByText('sun')).toBeInTheDocument(); // Assuming 'faSun' is your default icon
    });
});
