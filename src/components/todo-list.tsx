import List from '@material-ui/core/List';
import * as React from 'react';

import { Todo } from '../model';
import { TodoComponent } from './todo';


interface IProps {
  todos: ReadonlyArray<Todo>,
  onClick: (_ :number) => void,
}

export const TodoListComponent: React.SFC<IProps> = ({todos, onClick}) => (
  <List>
    { // tslint:disable-next-line jsx-no-lambda
      todos.map((todo: Todo) => (
      <TodoComponent
        key={todo.id}
        todo={todo}
        // tslint:disable-next-line jsx-no-lambda
        onClick={() => onClick(todo.id)}
      />
    ))}
  </List>
)
