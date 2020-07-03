import React,{
    PureComponent
}from 'react';

import  'axios';

import {
    NavTab
} from './../../types/m';

import SubNav from './subNav';

import styles from './../../styles/home.scss';

const navList: NavTab<string>[] = [
    {name: `推荐`, tab: `recommended`},
    {name: `后端`, tab: `backend`},
    {name: `前端`, tab: `frontend`},
    {name: `Android`, tab: `android`},
    {name: `IOS`, tab: `ios`},
    {name: `人工智能`, tab: `ai`},
    {name: `开发工具`, tab: `freebie`},
    {name: `代码人生`, tab: `career`},
    {name: `阅读`, tab: `article`}
];

class HomePage extends PureComponent {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className={styles.body_container}>
                <SubNav navList={navList} />
            </div>
        )
    }
}


export default HomePage;