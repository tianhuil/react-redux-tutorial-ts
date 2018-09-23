import createHistory from 'history/createBrowserHistory'
import * as React  from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { applyMiddleware, compose, createStore } from 'redux'

import { reducer } from '../state/reducer'

const history = createHistory()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = routerMiddleware(history)

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(middleware))
)

export const Middleware: React.SFC<{}> = ({children}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  </Provider>
)
