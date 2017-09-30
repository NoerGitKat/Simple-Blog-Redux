import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import NewPost from './components/NewPost';
import PostsIndex from './components/PostsIndex';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	  <BrowserRouter>
	  	<div>
	  		<Switch>
		  		<Route path='/posts/new' component={NewPost}/>
	  			<Route path='/' component={PostsIndex}/>
	  		</Switch>
	  	</div>
	  </BrowserRouter>
    
  </Provider>
  , document.querySelector('.container'));