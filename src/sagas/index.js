import { put, takeLatest, all } from 'redux-saga/effects';


const apiKey = 'd794b52f23c9a9729ea948f1f855a8df';
const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/';


function* fetchWeather(fetchWeather) {    
    let cities = fetchWeather.value;
    let searchString = fetchWeather.searchString
    const json = cities[0] ? yield fetch(openWeatherMapUrl + searchString +'?id=' + cities[0].id + '&APPID='+ apiKey)
        .then(response => response.json(), ) : null;    
    yield put({ type: "WEATHER_RECEIVED", json: json, });
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