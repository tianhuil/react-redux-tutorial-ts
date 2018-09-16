import * as React from 'react';
import { TodoComponent } from './todo';
import { Todo } from '../state/state';

export const TodoListComponent: React.SFC<Todo[]> = (todos: Todo[], onClick) => (
  <ul>
    {todos.map((todo: Todo) => (
      <TodoComponent
        key={todo.id}
        todo={todo}
        onClick={() => onClick(todo.id)}
      />
    ))}
  </ul>
)
