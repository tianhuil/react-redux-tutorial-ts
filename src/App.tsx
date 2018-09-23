import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, createStyles, MuiThemeProvider, Theme, WithStyles } from '@material-ui/core/styles';
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

const muiTheme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const styles = (theme: Theme) => createStyles({
  paper: {
    justifyContent: "center",
    margin: theme.spacing.unit,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  }
})


const Layout: React.SFC<RouteComponentProps<{filter: string}>> = ({ match: { params } }) => (
  <div className="App">
    <Grid container={true} spacing={24} alignItems="center" justify="center">
      <Grid item={true} xs={12}>
        <AddTodoContainer />
        <TodoListContainer filter={params.filter}/>
        <FooterComponent/>
      </Grid>
    </Grid>
  </div>
)

const AppRaw: React.SFC<WithStyles<typeof styles>> = ({classes}) => (
  <Provider store={store}>
    <CssBaseline>
      <Paper className={classes.paper}>
        <MuiThemeProvider theme={muiTheme}>
          <ConnectedRouter history={history}>
            <div>
              <Route path="/:filter?" component={Layout}/>
            </div>
          </ConnectedRouter>
        </MuiThemeProvider>
      </Paper>
    </CssBaseline>
  </Provider>
)

export default withStyles(styles)(AppRaw);
