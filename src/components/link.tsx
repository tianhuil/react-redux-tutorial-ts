import * as React from 'react';

interface Props {
  active: boolean,
  onClick: () => void,
  children: React.ReactNode,
};

export const LinkComponent: React.SFC<Props> = ({active, onClick, children}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="" onClick={e => {e.preventDefault(); onClick();}}>
      {children}
    </a>
  )
};
