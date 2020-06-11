import React from 'react';

import {
    Redirect
} from 'react-router-dom';

import {
    RouteConfig
} from 'react-router-config';

import {
    LazyLoad
} from './../components/index';

import App from './../app';

type Routes = RouteConfig[];

const rootConfig = (
    routes: Routes
): Routes => [{
    path: `/`,
    exact: true,
    render: () => <Redirect to="/home"/>
}, {
    path: `/home`,
    component: App,
    routes: routes
}];

const routes: RouteConfig[] = [
    {
        path: `/home`,
        exact: true,
        render: () => <Redirect to="/home/index"/>
    },
    {
        path: `/home/index`,
        exact: true,
        component: LazyLoad(() => import('./../pages/home/index'))
    },
    {
        path: `/home/pins`,
        exact: true,
        component: LazyLoad(() => import('./../pages/pins/index'))
    }
];

export default rootConfig(routes);