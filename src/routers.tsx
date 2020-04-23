import {
    Route,
} from 'react-router';

import React from 'react';

import {
    HashRouter,
    BrowserRouter
} from 'react-router-dom';

const BaseRouter:any = (
    __DEV__ ? HashRouter : BrowserRouter
)

import {
    LazyLoad
} from './components/index';

const _Router_ = () => {
    return (
        <BaseRouter>
            <Route
                exact
                path="/"
                component={LazyLoad(() => import('./pages/index'))}
            />
            <Route
                exact
                path="/a"
                component={LazyLoad(() => import('./pages/a'))}
            />
        </BaseRouter>
    )
}

export default _Router_;