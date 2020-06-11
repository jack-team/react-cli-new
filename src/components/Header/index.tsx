import React,{
    PureComponent
} from 'react';

import Nav from './nav';

import Form from './form';

import {
    Link
} from 'react-router-dom';

import {
    Resize
} from './../../components/index';

import styles from './styles.scss';

class Header extends PureComponent<any> {
    render() {
        return (
            <header className={styles.header_container}>
                <Resize className={styles.header_content}>
                    <div className={styles.header_left}>
                        <Link to="/" className={styles.logo_icon}>
                            <i className={styles.logo_icon_img}/>
                        </Link>
                        <Nav />
                    </div>
                    <div className={styles.header_right}>
                        <Form />
                    </div>
                </Resize>
            </header>
        )
    }
}

export default Header;
