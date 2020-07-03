import React,{
    PureComponent
} from 'react';

import Input from './input';

import styles from './styles.scss';

import sub_icon from './imgs/sub_icon.svg';

import {
    Dialog
} from './../../components/index';

interface State {
    showLoginDialog:boolean
}

class Form extends PureComponent<any,State> {
    state:State = {
        showLoginDialog:false
    }

    private onLoginClick = () => {
        this.setState({
            showLoginDialog:true
        })
    }

    private onLoginClose = () => {
        console.log(`11`)
        this.setState({
            showLoginDialog:false
        })
    }

    render() {
        const {
            showLoginDialog
        } = this.state;
        return (
            <div className={styles.header_form}>
                <Input/>
                <div className={styles.header_form_right}>
                    <div className={styles.form_item}>
                        <img src={sub_icon} />
                        <span>写文章</span>
                    </div>
                    <div className={styles.account}>
                        <div className={styles.form_item} onClick={this.onLoginClick}>
                            <span>登录</span>
                        </div>
                        <div className={styles.form_item}>
                            <span>注册</span>
                        </div>
                    </div>
                </div>
                <Dialog
                    direction="none"
                    show={showLoginDialog}
                    onClose={this.onLoginClose}
                >
                    <div style={{width:100,height:100,backgroundColor:`#fff`}}></div>
                </Dialog>
            </div>
        )
    }
}

export default Form;