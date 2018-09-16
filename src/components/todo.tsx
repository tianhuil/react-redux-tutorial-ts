import * as React from 'react';
import { Todo } from '../state/state'

interface Props {
  onClick: () => void,
  todo: Todo,
};

export const TodoComponent: React.SFC<Props> = ({onClick, todo}) => (
  <li key={todo.id}
    onClick={onClick}
    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
  >
    {todo.text}
  </li>
)
