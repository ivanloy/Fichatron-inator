import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CharacterSheet } from './screens/CharacterSheet';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#afa995',
      main: '#504b3a',
      dark: '#2d291a',
      contrastText: '#FFEDB1',
    },
    secondary: {
      light: '#bde6f2',
      main: '#6ab8d9',
      dark: '#508bb1',
      contrastText: '#21160E',
    },
    background: {
      default: "#000000"
    }
  },
});


const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CharacterSheet  />
      </ThemeProvider>
    </div>
  );
}

export default App;
