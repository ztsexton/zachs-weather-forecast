import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSnowflake,
    faWind,
    faTemperatureLow,
    faCloudSun,
    faCloud,
    faSun,
    faSmog,
    faTemperatureHigh
} from '@fortawesome/free-solid-svg-icons';

// Define the type for props
interface WeatherIconProps {
    summary: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ summary }) => {
    const iconMap: { [key: string]: any } = {
        "Freezing": faSnowflake,
        "Bracing": faWind,
        "Chilly": faTemperatureLow,
        "Cool": faCloudSun,
        "Mild": faCloud,
        "Warm": faSun,
        "Balmy": faSmog,
        "Hot": faTemperatureHigh,
        "Sweltering": faTemperatureHigh,
        "Scorching": faTemperatureHigh
    };

    const icon = iconMap[summary] || faSun; // Default to faSun if summary doesn't match

    return <FontAwesomeIcon icon={icon} />;
};

export default WeatherIcon;
