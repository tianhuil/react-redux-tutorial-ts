import * as React  from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './App.css';
import { FooterComponent } from './components/footer'
import { AddTodoContainer } from './containers/add-todo'
import { TodoListContainer } from './containers/todo-list'
import reducer from './state/reducers'

const store = createStore(reducer)

const App: React.SFC<{}> = () => (
  <Provider store={store}>
    <div className="App">
      <AddTodoContainer />
      <TodoListContainer />
      <FooterComponent />
    </div>
   </Provider>
)

export default App;
