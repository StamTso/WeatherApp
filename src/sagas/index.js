import { put, takeLatest, all } from 'redux-saga/effects';


const apiKey = 'd794b52f23c9a9729ea948f1f855a8df';
const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/';


function* fetchWeather(fetchWeather) {    
    let cities = fetchWeather.value.length > 0 ? fetchWeather.value[0].id : fetchWeather.value.id;
    let searchString = fetchWeather.searchString
    const json = yield fetch(openWeatherMapUrl + searchString +'?id=' + cities + '&units=metric&APPID='+ apiKey)
        .then(response => {
            if(response.status >= 200 && response.status <= 300){
                return response.json();
            }
            else{
                return 'ERROR';
            }
        });  
    if(json !== 'ERROR')  {
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