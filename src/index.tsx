import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';
import App from './components/App';
import './styles/index.scss';

console.log(theme);

const themeAds = {
  boxSizing: 'border-box',
  // components: {
  //   borderRadius: '100%',
  //   _focusVisible: {
  //     boxShadow: "none",
  //   },
  // },
};

const root = createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={{ ...theme, ...themeAds }}>
    <App />
  </ChakraProvider>,
);