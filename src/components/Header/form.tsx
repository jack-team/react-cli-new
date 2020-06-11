import React from 'react';

import Input from './input';

import styles from './styles.scss';

import sub_icon from './imgs/sub_icon.svg';

const Form  = () => (
    <div className={styles.header_form}>
        <Input/>
        <div className={styles.header_form_right}>
            <div className={styles.form_item}>
                <img src={sub_icon} />
                <span>写文章</span>
            </div>
            <div className={styles.account}>
                <div className={styles.form_item}>
                    <span>登录</span>
                </div>
                <div className={styles.form_item}>
                    <span>注册</span>
                </div>
            </div>
        </div>
    </div>
);

export default Form;