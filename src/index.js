import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
// import {Router ,Route } from 'react-router';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {todos} from './reducers/todo';
import {statusEdit} from './reducers/statusEdit';



const myLogger=(store)=>(next)=>(action)=>{
    // console.log('Log Action : ',action);
    next(action);
  }

 
let store = createStore(combineReducers({todo: todos,status:statusEdit}),applyMiddleware(myLogger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(()=>{
//     console.log('Update Store : ',store.getState());
//   });

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
