import Button from '@material-ui/core/Button'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { addTodo } from '../state/actions'


const styles = (theme: Theme) => createStyles({
  textInput: {
    paddingRight: theme.spacing.unit * 2,
  }
})


interface IProps extends WithStyles<typeof styles> {
   dispatch: Dispatch
}

const AddTodoComponent: React.SFC<IProps> = ({dispatch, classes}) => {
  let input: HTMLInputElement | null;

  return (<div>
    <form onSubmit={
      // tslint:disable-next-line jsx-no-lambda
      (e) => {
        e.preventDefault();
        if (!input || !input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }
    }>
      <TextField
        id="new-todo"
        label="New Todo"
        margin="normal"
        // tslint:disable-next-line jsx-no-lambda
        inputRef={ref => {input = ref}}
        className={classes.textInput}
      />
      <Button type="submit" className="textInput">
        Add Todo
      </Button>
    </form>
  </div>)
}


export const AddTodoContainer = connect()(withStyles(styles)(AddTodoComponent))
