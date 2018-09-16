import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions'
import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from './constants'
import { Filter, State, Todo } from './state';


type Action = ActionType<typeof actions>;

function filter(state: Filter = Filter.SHOW_ALL, action: Action): Filter {
  switch (action.type) {
    case SET_FILTER:
      return action.payload
    default:
      return state
  }
}

function todos(state: ReadonlyArray<Todo> = [], action: Action): ReadonlyArray<Todo> {
  switch (action.type) {
    case ADD_TODO:
      const newTodo: Todo = {
        completed: false,
        id: state.length,
        text: action.payload,
      }
      return [...state, newTodo];
    case TOGGLE_TODO:
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
