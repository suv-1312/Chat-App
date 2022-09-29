import React from 'react';
import ReactDOM from 'react-dom';
import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import ChatProvider from './Context/ChatProvider';

ReactDOM.render(
  <ChatProvider>
    <BrowserRouter>
      <ChakraProvider>
          <App/>
      </ChakraProvider>
    </BrowserRouter>
    </ChatProvider>,
      document.getElementById('root')
);