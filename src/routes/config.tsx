import {
    RouteConfig
} from 'react-router-config';

import App from './../app';

import {
    LazyLoad
} from './../components/index';

type Routes = RouteConfig[];

const rootConfig = (
    routes:Routes
): Routes => [{
    path: `/`,
    component:App,
    routes: routes
}];

const routes: RouteConfig[] = [
    {
        path: `/`,
        exact: true,
        component: LazyLoad(() => import('./../pages/index'))
    },
    {
        path: `/pins`,
        exact: true,
        component: LazyLoad(() => import('./../pages/pins'))
    }
];

export default rootConfig(routes);