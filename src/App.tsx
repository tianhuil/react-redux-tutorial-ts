import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import * as React  from 'react'
import { RouteComponentProps } from 'react-router'
import { Route } from 'react-router-dom'

import './App.css';
import { FooterComponent } from './components/footer'
import { AddTodoContainer } from './containers/add-todo'
import { TodoListContainer } from './containers/todo-list'
import { Middleware } from './lib/middleware'
import { ThemeComponent } from './lib/theme'


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
  <Middleware>
    <ThemeComponent>
      <Paper className={classes.paper}>
        <Route path="/:filter?" component={Layout}/>
      </Paper>
    </ThemeComponent>
  </Middleware>
)

export default withStyles(styles)(AppRaw);
