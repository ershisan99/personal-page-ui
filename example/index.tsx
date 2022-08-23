import { CssBaseline, ThemeProvider } from '@mui/material';
import * as React from 'react';
import 'react-app-polyfill/ie11';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error404, getTheme } from '../.';

const App = () => {
  const [open, setOpen] = React.useState(true);
  const isDarkTheme = true;
  return (
    <ThemeProvider theme={getTheme(isDarkTheme)}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Error404 />} />
      </Routes>
      {/* <UiModal
          open={open}
          onClose={() => setOpen(false)}
          title={'This is a Title'}
        >
          This is the body
        </UiModal> */}
    </ThemeProvider>
  );
};
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
