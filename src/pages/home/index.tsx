import React,{
    PureComponent
}from 'react';

import {
    NavItem
} from './../../types/m';

import SubNav from './subNav';

import styles from './../../styles/home.scss';

const navList: NavItem<string>[] = [
    {name: `推荐`, path: `recommended`},
    {name: `后端`, path: `backend`},
    {name: `前端`, path: `frontend`},
    {name: `Android`, path: `android`},
    {name: `IOS`, path: `ios`},
    {name: `人工智能`, path: `ai`},
    {name: `开发工具`, path: `freebie`},
    {name: `代码人生`, path: `career`},
    {name: `阅读`, path: `article`}
];


class HomePage extends PureComponent {
    render() {
        return (
            <div className={styles.body_container}>
                <SubNav navList={navList} />
            </div>
        )
    }
}


export default HomePage;