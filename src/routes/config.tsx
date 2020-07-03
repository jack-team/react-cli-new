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
        exact: true,
        path: `/home`,
        render: () => <Redirect to="/home/index"/>
    },
    {
        exact: true,
        path: `/home/index`,
        render: () => <Redirect to="/home/index/recommended"/>
    },
    {
        exact: true,
        path: `/home/index/:tab`,
        component: LazyLoad(() => import('./../pages/home/index'))
    },
    {
        exact: true,
        path: `/home/pins`,
        component: LazyLoad(() => import('./../pages/pins/index'))
    }
];

export default rootConfig(routes);