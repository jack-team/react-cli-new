import ReactDom from 'react-dom';

import React from 'react';

import './styles/common.scss'

import Routers from './routes/index';

ReactDom.render(<Routers />, document.getElementById('app'))