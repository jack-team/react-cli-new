import React from 'react';

import {
    Resize
} from './../../components/index';

import styles from './styles.scss';

export default () => {
    return (
        <header className={styles.header_container}>
            <Resize className={styles.header_content}>
                <div></div>
            </Resize>
        </header>
    )
}
