import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Weather from './weatherData/Weather'; // Adjust the import path as necessary
import useWeatherForecastApi from "./hooks/useWeatherForecastApi"
// Assuming useWeatherForecastApi hook is properly typed in its own file
const WeatherForecaster: React.FC = () => {
    const { data, loading, error } = useWeatherForecastApi();

    if (loading) return (
        <div>
            <FontAwesomeIcon icon={faSpinner} spin /> Loading weather forecast data...
        </div>
    );

    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <h1>5 Day Forecast</h1>
            {data ? <Weather data={data} /> : <p>No weather data available</p>}
        </>
    );
};

export default WeatherForecaster;