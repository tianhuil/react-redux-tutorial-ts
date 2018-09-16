import * as React from 'react';
import { Filter } from '../state/state'
import { LinkContainer } from '../containers/link'

export const FooterComponent: React.SFC<{}> = () => (
  <div>
    Show {' '}
    <LinkContainer filter={Filter.SHOW_ALL}> All </LinkContainer>{', '}
    <LinkContainer filter={Filter.SHOW_COMPLETED}> Completed </LinkContainer>{', '}
    <LinkContainer filter={Filter.SHOW_INCOMPLETE}> Incomplete </LinkContainer>
  </div>
)
