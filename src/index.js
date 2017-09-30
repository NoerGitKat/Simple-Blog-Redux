import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import Bye from './components/Bye';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	  <BrowserRouter>
	  	<div>
	  		<Route path='/hello' component={App}/>
	  		<Route path='/bye' component={Bye}/>
	  	</div>
	  </BrowserRouter>
    
  </Provider>
  , document.querySelector('.container'));