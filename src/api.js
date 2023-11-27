export const fetchWeatherData = async () => {
    const response = await fetch('https://gametrackerapi.azurewebsites.net/weatherforecast');
    const result = await response.json();
    return result;
};
