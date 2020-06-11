import React,{
    useRef,
    useState,
    useEffect,
    useCallback
} from 'react';

import {
    NavLink
} from 'react-router-dom';

interface NavItem<T> {
    path: T,
    name: T,
    exact:boolean
}

const $doc = document;

import styles from './styles.scss';

const initState: boolean = false;

const navList: NavItem<string>[] = [
    {name: ` 首页`, path: `/`,exact:true},
    {name: ` 沸点`, path: `/pins`,exact:true},
    {name: ` 话题`, path: `/topics`,exact:true},
    {name: ` 小册`, path: `/books`,exact:true},
    {name: ` 活动`, path: `/events`,exact:true}
];

const onEvent = (fn: (e: MouseEvent) => void) => {
    const evtType:any = `click`;
    $doc.addEventListener(evtType, fn);
    return () => $doc.removeEventListener(evtType, fn);
}

const Nav = () => {
    const [
        show,
        setShow
    ] = useState(initState);

    const _Ref: any = useRef();

    const _className = (
        [styles.phone_show_menu]
    );

    if (show) {
        _className.push(
            styles.show_menu
        )
    };

    const onMenuClick = useCallback(
        () => setShow(!show), [show]
    );

    const onBodyClick = (
        {target}: MouseEvent
    ) => {
        const {
            current
        } = _Ref;

        const _target = (
            target as HTMLElement
        );

        if (!current.contains(_target)) {
            setShow(false)
        };
    };

    useEffect(() => (
        onEvent(onBodyClick)
    ), []);

    return (
        <div
            ref={_Ref}
            className={styles.menu_wrapper}
        >
            <nav className={styles.menu_container}>
                <div
                    onClick={onMenuClick}
                    className={_className.join(` `)}
                >
                    <span>首页</span>
                    <div className={styles.arrow_down} />
                </div>
                <div className={styles.header_menu}>
                    {navList.map((item) => {
                        return (
                            <NavLink
                                exact={true}
                                to={item.path}
                                key={item.path}
                                children={item.name}
                                className={styles.nav_link}
                                activeClassName={styles.nav_active}
                            />
                        )
                    })}
                </div>
            </nav>
        </div>
    )
}

export default Nav;