import React from 'react';
import { render, screen } from '@testing-library/react';
import DailyForecast from './DailyForecast';
import { getDayOfWeek } from '../../../utils'; // Adjust the import path as needed
import WeatherIcon from './WeatherIcon';

jest.mock('./WeatherIcon', () => ({ summary }) => <div>WeatherIcon: {summary}</div>);

describe('DailyForecast Component', () => {
    it('renders the correct day of the week, date, temperature, and summary', () => {
        const mockData = {
            date: '2023-11-24',
            temperatureC: 15,
            summary: 'Mild'
        };

        render(<DailyForecast data={mockData} />);

        const dayOfWeek = getDayOfWeek(mockData.date);
        expect(screen.getByText(dayOfWeek)).toBeInTheDocument();
        expect(screen.getByText(mockData.date)).toBeInTheDocument();
        expect(screen.getByText(`Temperature: ${mockData.temperatureC}`)).toBeInTheDocument();
        expect(screen.getByText(`Summary: ${mockData.summary}`)).toBeInTheDocument();
    });

    it('renders the WeatherIcon component with the correct summary', () => {
        const mockData = {
            date: '2023-11-24',
            temperatureC: 15,
            summary: 'Mild'
        };

        render(<DailyForecast data={mockData} />);
        expect(screen.getByText(`WeatherIcon: ${mockData.summary}`)).toBeInTheDocument();
    });

    // Additional tests for checking background style can be added here
});
