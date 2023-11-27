import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import WeatherForecaster from './WeatherForecaster';
import { fetchWeatherData } from '../../api';

jest.mock('../../api', () => ({
    fetchWeatherData: jest.fn()
}));


describe('WeatherForecaster', () => {
    it('renders data when fetch is successful', async () => {
        fetchWeatherData.mockResolvedValueOnce([
            { date: '2023-11-24', temperatureC: 15, summary: 'Mild' },
        ]);

        render(<WeatherForecaster />);

        await waitFor(() => {
            // Add assertions here
            const weatherElement = screen.getByText(/Mild/i);
            expect(weatherElement).toBeInTheDocument();
        });
    });

});
