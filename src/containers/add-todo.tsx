import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { addTodo } from '../state/actions'


const AddTodoComponent: React.SFC<{ dispatch: Dispatch }> = ({dispatch}) => {
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
      <input ref={ref => {input = ref}}/>
      <button type="submit">
        Add Todo
      </button>
    </form>
  </div>)
}

export const AddTodoContainer = connect()(AddTodoComponent)
