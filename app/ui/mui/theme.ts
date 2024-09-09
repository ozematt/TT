'use client';
import { Roboto } from 'next/font/google';
import { createTheme, experimental_extendTheme as extendTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#212121',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export default darkTheme;
