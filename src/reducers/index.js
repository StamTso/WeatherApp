/*
Reducer for the Get Weather/Forecast actions
 */
const weatherReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_WEATHER':
          return { ...state, city: action.value, loading: true };
      case 'WEATHER_RECEIVED':
          return { ...state, weather: action.json, loading: false };
      case 'GET_FORECAST':
         return {...state, loading: true};
      case 'FORECAST_RECEIVED':
         return { ...state, foreCast: action.json, loading: false };
      default:
          return state;
     }
  };
  export default weatherReducer;