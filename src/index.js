import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducers from './reducers/rootReducer';
import App from './App';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducers,
   applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);
render(
   <Provider store={store}>
     <App />
   </Provider>,
document.getElementById('root'),
);
// ReactDOM.render(<Provider store={configureStore()}>
// <App />
// </Provider>,
//  document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
