import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import * as React  from 'react'

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export const ThemeComponent: React.SFC<{}> = ({children}) => (
  <CssBaseline>
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  </CssBaseline>
)
