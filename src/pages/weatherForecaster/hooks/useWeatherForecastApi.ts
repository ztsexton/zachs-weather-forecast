import {useEffect, useState} from "react";
import * as weatherService from "../../../services/weatherService";

const useWeatherForecastApi = () => {
    const [data, setData] = useState<ForecastData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const weatherData = await weatherService.fetchFiveDayForecast()
                setData(weatherData);
                setError(null);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        const timer = setTimeout(() => {
            fetchData();
        }, 1500);
        return () => {
            clearTimeout(timer);
        }
    }, []);

    return { data, loading, error };
};

export default useWeatherForecastApi