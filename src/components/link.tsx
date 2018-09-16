import * as React from 'react';


interface IProps {
  active: boolean,
  onClick: () => void
};

export const LinkComponent: React.SFC<IProps> = ({active, onClick, children}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    // tslint:disable-next-line jsx-no-lambda
    <a href="" onClick={e => {e.preventDefault(); onClick();}}>
      {children}
    </a>
  )
};
