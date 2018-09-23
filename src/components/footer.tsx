import * as React from 'react';

import { LinkContainer } from '../containers/link'
import { Filter } from '../model'


export const FooterComponent: React.SFC<{}> = () => (
  <div>
    <LinkContainer filter={Filter.SHOW_ALL} />
    <LinkContainer filter={Filter.SHOW_COMPLETED} />
    <LinkContainer filter={Filter.SHOW_INCOMPLETE} />
  </div>
)
