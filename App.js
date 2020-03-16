import React, { Fragment } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
//import Buttonui from "./components/Layout/Buttonui";
import {BrowserRouter as Router} from 'react-router-dom';
import NavigationBar from "./components/Layout/NavigationBar";
import { red, purple } from "@material-ui/core/colors";
import { palette } from "@material-ui/system";
import Textbox from './components/Stateful/MyStatefulEditor'

function App() {
  const theme = createMuiTheme({
    root: {
      '& .MuiGrid-root': {
          fontSize: 50,
      },
    },
    typography: {
      fontFamily: "Roboto"
    },
  });
  return (
    <Fragment>

      <MuiThemeProvider theme={theme}>
        <Router>
        <Textbox />
        </Router>
        
        
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
