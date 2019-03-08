import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

const store = createStore(rootReducer, applyMiddlewarelogger(middlewareLogger, thunkMiddleware));

let unsubscribe = store.subscribe(() =>
  console.log('subscription', store.getState())
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <HashRouter>
          <Component/>
        </HashRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
