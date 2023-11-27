import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon';
import {getDayOfWeek} from "../../../utils"; // Assuming WeatherIcon is in the same directory

interface DailyForecastProps {
    data: ForecastData;
}

const DailyForecast: React.FC<DailyForecastProps> = ({ data }) => {
    // If you need to set state from props, ensure that the props are updated correctly.
    // Otherwise, you could directly use props without state.
    const [forecastData, setForecastData] = useState<ForecastData>(data);
    const dayOfWeek = getDayOfWeek(forecastData.date);
    const date = formatDate(forecastData.date);

    return (
        <div className="daily-forecast" style={{ background: getBackgroundStyle(data.summary) }}>
            <h3>{dayOfWeek}</h3>
            <WeatherIcon summary={data.summary} />
            <p>{date}</p>
            <p>{data.temperatureC} C</p>
            <p>{data.summary}</p>
        </div>
    )
}


const getBackgroundStyle = (summary: string): string => {
    const backgroundStyles: { [key: string]: string } = {
        "Freezing": "linear-gradient(to right, #83a4d4, #b6fbff)",
        "Bracing": "linear-gradient(to right, #acb6e5, #86fde8)",
        "Chilly": "linear-gradient(to right, #74ebd5, #9face6)",
        "Cool": "linear-gradient(to right, #a1c4fd, #c2e9fb)",
        "Mild": "linear-gradient(to right, #f5f7fa, #c3cfe2)",
        "Warm": "linear-gradient(to right, #ff9a9e, #fad0c4)",
        "Balmy": "linear-gradient(to right, #ffecd2, #fcb69f)",
        "Hot": "linear-gradient(to right, #ff9a9e, #fecfef)",
        "Sweltering": "linear-gradient(to right, #ff758c, #ff7eb3)",
        "Scorching": "linear-gradient(to right, #ffafbd, #ffc3a0)"
    };

    return backgroundStyles[summary] ||  "linear-gradient(to right, #ece9e6, #ffffff)";
};


const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};


export default DailyForecast