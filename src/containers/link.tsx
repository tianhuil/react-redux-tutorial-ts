import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { LinkComponent } from '../components/link'
import { Filter, State } from '../state'
import { setFilter } from '../state/actions'

interface IProps {
  filter: Filter
  children: React.ReactNode,
}

const mapStateToProps = (state: State, props: IProps) => ({
  active: (props.filter === state.filter)
})

const mapDispatchToProps =(dispatch: Dispatch, props: IProps) => ({
  onClick: () => dispatch(setFilter(props.filter))
})

export const LinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinkComponent)
