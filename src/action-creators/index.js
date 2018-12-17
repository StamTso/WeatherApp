/*
 Fetch current weather data
*/
export const getWeather = (e, city, searchType) => ({
    type: 'GET_WEATHER',
    value: city,
    searchString: searchType
});
