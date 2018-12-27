/*
 Fetch current weather data
*/
export const getWeather = (e, city, searchType) => ({
    type: 'GET_WEATHER',
    value: city,
    searchString: searchType //string used in the api call. 'weather': retrieves current weather data
                             // 'forecast': retrieves 5 day forecast data
});

export const pinData = (forecastData, city) => ({
    type: 'PIN_DATA',
    value: forecastData,
    city: city
});
