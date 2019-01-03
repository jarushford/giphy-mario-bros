import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const render = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(render, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
