import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';
import App from './components/App';
import './styles/index.scss';

console.log(theme);

const themeAds = extendTheme({
  boxSizing: 'border-box',
  fonts: {
    body: '\'Quicksand\', sans-serif',
    heading: '\'Quicksand\', sans-serif',
  },
  // components: {
  //   Input: {
  //     baseStyle: {
  //       field: {
  //         borderColor: 'blue.100',
  //         _hover: {
  //           borderColor: 'blue.200',
  //         },
  //       },
  //     },
  //     sizes: {},
  //     defaultProps: {},
  //     variants: {
  //       outline: {
  //         field: {
  //           border: 'none',
  //           _focus: {
  //             borderColor: 'none',
  //             boxShadow: 'none',
  //           },
  //         },
  //       },

  //       // yourVariant: {
  //       //   field: {
  //       //     border: '3px solid',
  //       //     borderColor: '#130080',
  //       //     _focus: {
  //       //       borderColor: '#9280ff',
  //       //       boxShadow: 'none',
  //       //     },
  //       //   },
  //       // },
  //     },
  //   },
  // },
  // components: {
  //   borderRadius: '100%',
  //   _focusVisible: {
  //     boxShadow: "none",
  //   },
  // },
});

const root = createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={themeAds}>
    <App />
  </ChakraProvider>,
);