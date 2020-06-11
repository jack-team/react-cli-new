import React,{
    useRef,
    useMemo,
    useState,
    useEffect,
    useCallback
} from 'react';

import {
    NavLink,
    withRouter,
    RouteProps
} from 'react-router-dom';

const $doc = document;

import {
    NavItem
} from './../../types/m';

import styles from './styles.scss';

const initState: boolean = false;

const navList: NavItem<string>[] = [
    {name: ` 首页`, path: `/home`,exact:true},
    {name: ` 沸点`, path: `/home/pins`,exact:true},
    {name: ` 话题`, path: `/home/topics`,exact:true},
    {name: ` 小册`, path: `/home/books`,exact:true},
    {name: ` 活动`, path: `/home/events`,exact:true}
];

const onEvent = (
    fn: (e: MouseEvent) => void) => (() => {
        const evtType:any = `click`;
        $doc.addEventListener(evtType, fn);
        return () => $doc.removeEventListener(evtType, fn);
    }
)

const findName = (path:string) => {
    const {
        name
    } = navList.find((item:NavItem<string>) => (
        item.path === path
    )) || {} as NavItem<string>;
    return name || ``;
}

const Nav = (props:RouteProps = {}) => {
    const {
        pathname = ``
    } = props.location || {};

    const [
        show,
        setShow
    ] = useState(initState);

    const Ref: any = useRef();

    const onClickFn = () => (
        setShow(!show)
    )

    const classNameFn = () => {
        const classList = [
            styles.phone_show_menu
        ];
        if(show) {
            classList.push(
                styles.show_menu
            )
        };
        return classList.join(` `);
    }

    const className = useMemo(
        classNameFn,[show]
    );

    const onMenuClick = useCallback(
        onClickFn, [show]
    );

    const onBodyClick = (
        {target}: MouseEvent
    ) => {
        const {
            current
        } = Ref;

        const _target = (
            target as HTMLElement
        );

        if (!current.contains(_target)) {
            setShow(false)
        };
    };

    useEffect(onEvent(onBodyClick), []);

    return (
        <div
            ref={Ref}
            className={styles.menu_wrapper}
        >
            <nav className={styles.menu_container}>
                <div
                    onClick={onMenuClick}
                    className={className}
                >
                    <span>{findName(pathname)}</span>
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
                                onClick={onMenuClick}
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

export default withRouter(Nav);