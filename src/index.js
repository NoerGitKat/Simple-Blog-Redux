import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/App';
import PostsIndex from './components/PostsIndex';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	  <BrowserRouter>
	  	<div>
	  		<Route path='/' component={PostsIndex}/>
	  		<Route path='/hi' component={App}/>
	  	</div>
	  </BrowserRouter>
    
  </Provider>
  , document.querySelector('.container'));