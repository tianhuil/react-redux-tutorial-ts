import * as React from 'react';

import { LinkContainer } from '../containers/link'
import { Filter } from '../state'


export const FooterComponent: React.SFC<{}> = () => (
  <div>
    Show {' '}
    <LinkContainer filter={Filter.SHOW_ALL}> All </LinkContainer>{', '}
    <LinkContainer filter={Filter.SHOW_COMPLETED}> Completed </LinkContainer>{', '}
    <LinkContainer filter={Filter.SHOW_INCOMPLETE}> Incomplete </LinkContainer>
  </div>
)
