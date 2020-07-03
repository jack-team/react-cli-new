import React,{
    PureComponent
}from 'react';

import {
    NavLink,
    withRouter,
    RouteProps
} from 'react-router-dom';

import {
    NavTab
} from './../../types/m';

import {
    Resize
} from './../../components/index';

import styles from './../../styles/home.scss';

interface Props extends RouteProps {
    navList:NavTab<string>[]
}

// @ts-ignore
@withRouter
class SubNav extends PureComponent<Props> {
    static defaultProps = {
        navList:[]
    }

    render() {
        const {
            navList
        } = this.props;

        console.log(this.props)

        return (
            <div className={styles.nav_container}>
                <Resize>
                    <div className={styles.nav_content}>
                        {navList.map((nav:NavTab<string>) => {
                            return (
                                <NavLink
                                    key={nav.tab}
                                    children={nav.name}
                                    className={styles.nav_item}
                                    to={`/home/index/${nav.tab}`}
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