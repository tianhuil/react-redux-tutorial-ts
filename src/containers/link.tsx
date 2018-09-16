import * as React from 'react';
import { connect } from 'react-redux'
import { LinkComponent } from '../components/Link'
import { setFilter } from '../state/actions'
import { State, Filter } from '../state/state'

interface Props {
  filter: Filter
  children: React.ReactNode,
}

export const LinkContainer = connect(
  (state: State, props: Props) => ({
    active: props.filter == state.filter
  }),
  (dispatch, props: Props) => ({
    onClick: () => dispatch(setFilter(props.filter))
  }),
)(LinkComponent)
