import { CssBaseline, ThemeProvider } from '@mui/material';
import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Modal } from '../.';
import { getTheme } from './theme';

const App = () => {
  const [open, setOpen] = React.useState(true);
  const isDarkTheme = true;
  return (
    <ThemeProvider theme={getTheme(isDarkTheme)}>
      <CssBaseline />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={'This is a Title'}
      >
        This is the body
      </Modal>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
