import React from 'react';

import {
    HashRouter,
    BrowserRouter
} from 'react-router-dom';

import {
    renderRoutes
} from "react-router-config";

import configs from './config';

const BaseRouter:any = (
    __dev__ ? HashRouter : BrowserRouter
)

export default () => (
    <BaseRouter>
        {renderRoutes(configs)}
    </BaseRouter>
)