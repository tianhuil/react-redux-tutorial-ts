import createHistory from 'history/createBrowserHistory'
import * as React  from 'react'
import { Provider } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { applyMiddleware, compose, createStore } from 'redux'

import './App.css';
import { FooterComponent } from './components/footer'
import { AddTodoContainer } from './containers/add-todo'
import { TodoListContainer } from './containers/todo-list'
import { reducer } from './state/reducer'

const history = createHistory()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = routerMiddleware(history)

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(middleware))
)

const Layout: React.SFC<RouteComponentProps<{filter: string}>> = ({ match: { params } }) => (
  <div className="App">
    <AddTodoContainer />
    <TodoListContainer filter={params.filter}/>
    <FooterComponent/>
  </div>
)

const App: React.SFC<{}> = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/:filter?" component={Layout}/>
       </div>
    </ConnectedRouter>
  </Provider>
)

export default App;
