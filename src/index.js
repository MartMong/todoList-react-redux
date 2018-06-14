import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {todos} from './reducers/todo';

const myLogger=(store)=>(next)=>(action)=>{
    console.log('Log Action : ',action);
    next(action);
  }

 
let store = createStore(combineReducers({todo: todos}),applyMiddleware(myLogger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{
    console.log('Update Store : ',store.getState());
  });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    
    ,document.getElementById('root'));
registerServiceWorker();
