import { connect } from 'react-redux';
import { Dispatch } from 'redux'

import { TodoListComponent } from '../components/todo-list'
import { Filter, State, Todo } from '../state';
import { toggleTodo } from '../state/actions';


function getTodos(todos: ReadonlyArray<Todo>, filter: Filter): ReadonlyArray<Todo> {
  switch (filter) {
    case Filter.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case Filter.SHOW_INCOMPLETE:
      return todos.filter(t => !t.completed)
    case Filter.SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = (state: State) => ({
  todos: getTodos(state.todos, state.filter)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick: (id: number) => dispatch(toggleTodo(id))
 })

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListComponent)
