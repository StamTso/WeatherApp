/*
Reducer for the Get Weather/Forecast actions
 */
export const weatherReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_WEATHER':
          return { ...state, city: action.value, searchString:action.searchString, loading: true };
      case 'WEATHER_RECEIVED':
          return { ...state, weather: action.json, loading: false };
      case 'WEATHER_ERROR':
          return {...state, error: action.error, loading: false};
      default:
          return state;
     }
  };

  /**
   * Handles the Pin Data action
   * @param {*} state //The current App state with an added pinnedData array of objects
   * @param {*} action //The data of the PIN_DATA action
   */
export const pinDataReducer = (state = {pinnedData:[]}, action) => {
      switch (action.type){
          case 'PIN_DATA':
            return{...state, pinnedData:state.pinnedData.concat({forecast:action.value, city:action.city})};
          default:
            return state;
      }
  };