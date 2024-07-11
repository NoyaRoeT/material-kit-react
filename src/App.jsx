import './global.css';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import useScrollToTop from './hooks/useScrollToTop';

import Router from './routes/Router';
import ThemeProvider from './theme/ThemeProvider';

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
