import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Application from './Application';
import {setupStore} from './redux/store';

import './style/index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);
const store = setupStore();

const theme = extendTheme({
    colors: {
        primary: {
            orange: "#f48f2a",
            black: "black",
            white: "white"
        },
    },
})

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Application/>
            </ChakraProvider>
        </BrowserRouter>
    </Provider>,
);
