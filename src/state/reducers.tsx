import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import { Filter, State, Todo } from './';
import * as actions from './actions'


type Action = ActionType<typeof actions>

function filter(state: Filter = Filter.SHOW_ALL, action: Action): Filter {
  switch (action.type) {
    case getType(actions.setFilter):
      return action.payload
    default:
      return state
  }
}

function todos(state: ReadonlyArray<Todo> = [], action: Action): ReadonlyArray<Todo> {
  switch (action.type) {
    case getType(actions.addTodo):
      const newTodo: Todo = {
        completed: false,
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

export default combineReducers<State, Action>({
  filter,
  todos,
})
