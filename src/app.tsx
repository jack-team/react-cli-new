import React,{
    Fragment
} from 'react';

import {
    renderRoutes,
    RouteConfigComponentProps
} from 'react-router-config';

import {
    Header
} from './components/index';

const App = (props: RouteConfigComponentProps) => {
    const {
        routes
    } = props.route;

    return (
        <Fragment>
            <Header />
            {renderRoutes(routes)}
        </Fragment>
    )
}

export default App;