import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SnackbarProvider } from './components/snackbar';

const theme = createTheme({
  palette: {
    background: {
      primary: '#fbfaf8',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    primary: {
      main: "#003330",
      contrastText: '#ffffff',
      hover: "#005953",
    },
    secondary: {
      main: "#404040",
      contrastText: '#ffffff',
      hover: "#005953",
    },
    action: {
      active: '#001E3C',
    }, 
  },
  typography: {
    fontFamily: "IBM Plex Sans, Alv",
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider preventDuplicate>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
