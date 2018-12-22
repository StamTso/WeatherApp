import { put, takeLatest, all } from 'redux-saga/effects';


const apiKey = 'd794b52f23c9a9729ea948f1f855a8df';
const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/';


function* fetchWeather(fetchWeather) {    
    let cities = fetchWeather.value;
    let searchString = fetchWeather.searchString
    const json =  cities !== null  && cities.length > 0  ? yield fetch(openWeatherMapUrl + searchString +'?id=' + cities[0].id + '&units=metric&APPID='+ apiKey)
        .then(response => response.json(), ) : null;  
    if(json !== null)  {
        return yield put({ type: "WEATHER_RECEIVED", json: json, });
    }
    else{
        return yield put({ type: "WEATHER_ERROR", error: "No city was found", });
    }
}

function* actionWatcher() {
     yield [
        takeLatest('GET_WEATHER', fetchWeather)
     ]
    }

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}