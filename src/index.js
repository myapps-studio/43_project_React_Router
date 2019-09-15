import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import DevTools from './DevTools';

import {getCountries} from './actions/actions-countries';

render(
    <Provider store={store}>
    <div>
        <Router history={hashHistory} routes={routes}/> 
        <h1>Inicjalizacja projektu</h1>
        <DevTools />
    </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());