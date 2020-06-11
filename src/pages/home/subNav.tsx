import React,{
    PureComponent
}from 'react';

import {
    NavLink,
    withRouter,
    RouteProps
} from 'react-router-dom';

import {
    NavItem
} from './../../types/m';

import {
    Resize
} from './../../components/index';

import styles from './../../styles/home.scss';

interface Props extends RouteProps {
    navList:NavItem<string>[]
}

// @ts-ignore
@withRouter
class SubNav extends PureComponent<Props> {
    static defaultProps = {
        navList:[]
    }

    render() {
        const {
            navList,
            location
        } = this.props;

        return (
            <div className={styles.nav_container}>
                <Resize>
                    <div className={styles.nav_content}>
                        {navList.map((nav:NavItem<string>) => {
                            return (
                                <NavLink
                                    key={nav.path}
                                    children={nav.name}
                                    to={`/home/${nav.path}`}
                                    className={styles.nav_item}
                                    activeClassName={styles.nav_item_active}
                                />
                            )
                        })}
                    </div>
                </Resize>
            </div>
        )
    }
}

export default SubNav;