/*
 Fetch current weather data
*/
export const getWeather = (e, city) => ({
    type: 'GET_WEATHER',
    value: city
});

/*
 Fetch 5-day forecast data
*/
export const getForecast = (e, city) => ({
    type: 'GET_FORECAST',
    value: city
});