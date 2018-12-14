import { put, takeLatest, all } from 'redux-saga/effects';



let city = 'Vilnius';
let route ='weather';
const apiKey = 'd794b52f23c9a9729ea948f1f855a8df';
const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/';

function* fetchWeather() {     
    
    const json = yield fetch(openWeatherMapUrl + route + '?q=' + city + '&APPID='+ apiKey)
        .then(response => response.json(), );    
    yield put({ type: "WEATHER_RECEIVED", json: json, });
}

function* getForecast(){
    const json = yield fetch(openWeatherMapUrl + 'forecast?q=' + city + '&APPID='+ apiKey)
        .then(response => response.json(), );    
    yield put({ type: "FORECAST_RECEIVED", json: json, });
}

function* actionWatcher() {
     yield [
        takeLatest('GET_WEATHER', fetchWeather),
        takeLatest('GET_FORECAST', getForecast)
     ]
    }

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}