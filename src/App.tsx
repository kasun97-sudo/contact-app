import React from 'react';
import './App.css';
import Preview from './components/Preview';
import {createTheme, ThemeProvider} from "@mui/material/styles";

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: ['"Open Sans"', "sans-serif"].join(","),
    },
    palette: {
      primary: {
        main: "rgb(0, 0, 0)",
      },
      secondary: {
        main: "rgb(211, 214, 219)",
      },
      info:{
        main: "rgb(61, 68, 101)",
      },
      success: {
        main: "#008567",
      },
      error: {
        main: "#e02020",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Preview />
    </ThemeProvider>
  );
}

export default App;
