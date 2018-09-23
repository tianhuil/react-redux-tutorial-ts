import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import * as React  from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router'

import { FooterComponent } from './components/footer'
import { AddTodoContainer } from './containers/add-todo'
import { TodoListContainer } from './containers/todo-list'
import { Middleware } from './lib/middleware'
import { ThemeComponent } from './lib/theme'
import { Filter } from './model/'


const styles = (theme: Theme) => createStyles({
  paper: {
    ...theme.mixins.gutters(),
    justifyContent: "center",
    margin: theme.spacing.unit,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    textAlign: "center"
  }
})

const Layout: React.SFC<RouteComponentProps<{filter: string}>> = ({ match: { params } }) => (
  <div>
    <AddTodoContainer/>
    <TodoListContainer filter={params.filter}/>
    <FooterComponent/>
  </div>
)

const AppRaw: React.SFC<WithStyles<typeof styles>> = ({classes}) => (
  <Middleware>
    <ThemeComponent>
      <Paper className={classes.paper} elevation={3}>
        <Route exact={true} path="/" render={
          // tslint:disable-next-line jsx-no-lambda
          () => <Redirect to={Filter.SHOW_ALL}/>
        }/>
        <Route path="/:filter" component={Layout}/>
      </Paper>
    </ThemeComponent>
  </Middleware>
)

export default withStyles(styles)(AppRaw);
