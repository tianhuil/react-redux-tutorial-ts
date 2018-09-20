import { LocationChangeAction, RouterAction, routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { ActionType, getType, StateType } from 'typesafe-actions';

import { Todo } from '../model';
import * as actions from './actions'

export type Action = ActionType<typeof actions> | RouterAction | LocationChangeAction

function todos(state: ReadonlyArray<Todo> = [], action: Action): ReadonlyArray<Todo> {
  switch (action.type) {
    case getType(actions.addTodo):
      const newTodo: Todo = {
        completed: false,
        created: new Date(),
        id: state.length,
        text: action.payload,
      }
      return [...state, newTodo];
    case getType(actions.toggleTodo):
      return state.map((todo, id) =>
        (id === action.payload) ?
        {...todo, completed: !todo.completed} :
        todo
      )
    default:
      return state
  }
}

export const reducer = combineReducers({
  router: routerReducer,
  todos,
})

export type State = StateType<typeof reducer>
