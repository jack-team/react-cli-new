import {
    render
} from 'react-dom';

import React from 'react';

import Routers from './routers';

const App = () => {
    return (
        <Routers />
    )
}

render(<App />,
    document.getElementById('app')
)