import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Dispatch } from 'redux'

import { LinkComponent } from '../components/link'
import { Filter } from '../model'
import { State } from '../state/reducer'

interface IProps {
  filter: Filter
}

function getFilterFromState(state: State): string {
  if (state === null || state.router === null || state.router.location == null) {
    return ''
  }
  return state.router.location.pathname.slice(1)
}

const mapStateToProps = (state: State, props: IProps) => ({
  active: (props.filter === getFilterFromState(state))
})

const mapDispatchToProps =(dispatch: Dispatch, props: IProps) => ({
  onClick: () => dispatch(push(props.filter))
})

export const LinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinkComponent)
