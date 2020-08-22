import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger'

const feelingsReducer = (state = [], action) => {
    if (action.type === 'FEELINGS'){
        return action.payload
    } else if (action.type === 'SUBMIT') {
        return []
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'UNDERSTANDING'){
        return action.payload
    } else if (action.type === 'SUBMIT') {
        return []
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if (action.type === 'SUPPORT'){
        return action.payload
    } else if (action.type === 'SUBMIT') {
        return []
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if (action.type === 'COMMENTS'){
        return action.payload
    } else if (action.type === 'SUBMIT') {
        return []
    }
    return state;
}



const store = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        commentsReducer,
        supportReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
