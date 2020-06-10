import {
    render
} from 'react-dom';

import React from 'react';

import './styles/common.scss'

import Routers from './routes/index';

const App = () => (
    <Routers />
)

render(<App />, document.getElementById('app'))