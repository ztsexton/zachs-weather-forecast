import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from './Weather';
import DailyForecast from './DailyForecast';

jest.mock('./DailyForecast', () => (props) => <div data-testid="daily-forecast">{props.data.date}</div>);

describe('Weather Component', () => {
    it('renders DailyForecast components for each weather data item', () => {
        const mockData = [
            { date: '2023-11-24', temperatureC: 15, summary: 'Mild' },
            { date: '2023-11-25', temperatureC: 16, summary: 'Warm' },
            // ... more test data
        ];

        render(<Weather data={mockData} />);

        const dailyForecasts = screen.getAllByTestId('daily-forecast');
        expect(dailyForecasts.length).toBe(mockData.length);
        mockData.forEach((dataItem, index) => {
            expect(dailyForecasts[index]).toHaveTextContent(dataItem.date);
        });
    });

    // Additional tests can be added here
});
