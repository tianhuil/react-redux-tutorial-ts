import * as React  from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css';
import reducer from './state/reducers'

const store = createStore(reducer)

const App: React.SFC<{}> = () => (
  <Provider store={store}>
    <div className="App">
      Hello World!
    </div>
   </Provider>
)

export default App;
