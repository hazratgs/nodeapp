import React from 'react';
import { Router } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';

import configureStore from './store/configureStore'
const store = configureStore();

import './styles/app.css';

render(
    <Provider store={store}>
        <Router routes={routes} />
    </Provider>,
    document.getElementById('root')
);