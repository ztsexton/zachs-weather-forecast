import React, {useState} from "react";
import DailyForecast from "./DailyForecast";

interface WeatherProps {
    data: ForecastData[];
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
    const [weather, setWeather] = useState<ForecastData[]>(data);

    return (
        <div className='forecasts'>
            {weather.map((forecast, index) => (
                <DailyForecast key={index} data={forecast} />
            ))}
        </div>
    )
}

export default Weather;