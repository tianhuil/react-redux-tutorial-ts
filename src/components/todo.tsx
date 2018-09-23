import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as React from 'react';

import { Todo } from '../model'

interface IProps {
  onClick: () => void,
  todo: Todo,
}

export const TodoComponent: React.SFC<IProps> = ({onClick, todo}) => (
  <ListItem key={todo.id}
    onClick={onClick}
    dense={true}
    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
  >
    <Checkbox
      checked={todo.completed}
      tabIndex={-1}
    />
    <ListItemText primary={todo.text} secondary={todo.created.toLocaleString()} />
  </ListItem>
)
