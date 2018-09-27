import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import configureStore from "./core";
import { Router } from 'react-router-dom';
import history from './core/history';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router> 
    </Provider>, document.getElementById('root'));
registerServiceWorker();
