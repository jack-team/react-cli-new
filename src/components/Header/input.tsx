import React,{
    useState,
    useCallback
} from 'react';

import styles from './styles.scss';

import search_icon from './imgs/search.svg';

import search_focus_icon from './imgs/search_focus.svg';

const initState:boolean = false;

const Input = () => {
    const [
        focus,
        setFocus
    ] = useState(initState);

    const onBlur = () => {
        setFocus(false)
    };

    const onFocus = () => {
        setFocus(true)
    };

    const className = [
        styles.search_form
    ];

    if(focus) {
        className.push(
            styles.search_form_focus
        )
    };

    return (
        <form className={className.join(` `)}>
            <input
                type="text"
                placeholder="搜索掘金"
                onBlur={useCallback(onBlur,[])}
                onFocus={useCallback(onFocus,[])}
            />
            <button type="submit">
                <img src={focus ? search_focus_icon:search_icon} />
            </button>
        </form>
    )
}

export default Input;