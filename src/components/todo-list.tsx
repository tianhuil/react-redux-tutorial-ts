import * as React from 'react';

import { Todo } from '../state';
import { TodoComponent } from './todo';


interface IPropsx {
  todos: ReadonlyArray<Todo>,
  onClick: (_ :number) => void,
}

export const TodoListComponent: React.SFC<IPropsx> = ({todos, onClick}) => (
  <ul>
    { // tslint:disable-next-line jsx-no-lambda
      todos.map((todo: Todo) => (
      <TodoComponent
        key={todo.id}
        todo={todo}
        // tslint:disable-next-line jsx-no-lambda
        onClick={() => onClick(todo.id)}
      />
    ))}
  </ul>
)
