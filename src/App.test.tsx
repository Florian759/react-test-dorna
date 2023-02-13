/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { store } from './redux/store';
import theme from './theme';

test('renders react test', () => {
  const { getByText } = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <BrowserRouter >
          <App />
        </BrowserRouter >
      </ThemeProvider>,
    </Provider>
  );

  expect(getByText(/test dorna/i)).toBeInTheDocument();
});

