import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio'

import * as React from 'react';

import { Filter } from '../model'


interface IProps {
  active: boolean,
  filter: Filter,
  onClick: () => void,
}

export const LinkComponent: React.SFC<IProps> = ({active, onClick, filter}) => (
  <FormControlLabel
    value={filter}
    control={<Radio />}
    label={filter}
    checked={active}
    onChange={
      // tslint:disable-next-line jsx-no-lambda
      e => {e.preventDefault(); onClick();}
    }/>
)
