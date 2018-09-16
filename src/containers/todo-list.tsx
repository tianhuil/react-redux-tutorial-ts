import { connect } from 'react-redux';
import { State, Todo } from '../state/state';
import { Filter } from '../state/state';
import { toggleTodo } from '../state/actions';
import { TodoListComponent } from '../components/todo-list'

function getTodos(todos: ReadOnlyArray<Todo>, filter: Filter): ReadOnlyArray<Todo> {
	switch (filter) {
		case Filter.SHOW_COMPLETED:
			return todos.map(t => t.completed)
		case Filter.SHOW_INCOMPLETE:
			return todos.map(t => !t.completed)
		case Filter.SHOW_ALL:
		default:
			return todos
	}
}

export const TodoListContainer = connect(
	(state: State) => ({
		todos: getTodos(state.todos, state.filter)
	}),
	(dispatch) => ({
		onClick: (id: number) => dispatch(toggleTodo(id))
	})
)(TodoListComponent)
