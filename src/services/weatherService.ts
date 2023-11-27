import apiClient from "../apiService";

export const fetchFiveDayForecast = async (): Promise<ForecastData[]> => {
    try {
        const response = await apiClient.get<ForecastData[]>('/weatherforecast');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};