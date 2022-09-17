import React from 'react';
import ReactDOM from 'react-dom';
import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

ReactDOM.render(
    <BrowserRouter>
      <ChakraProvider>
          <App/>
      </ChakraProvider>
    </BrowserRouter>,
    document.getElementById('root')
);