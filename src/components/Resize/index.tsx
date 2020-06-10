import React from 'react';

import styles from './styles.scss';

interface Props {
    children: any,
    className?: string
}

const Resize = (props: Props) => {
    const {
        children,
        className
    } = props || {};

    const _className = [
        styles.resize_container, className
    ].join(` `)

    return (
        <div className={_className}>
            {children}
        </div>
    )
}

export default Resize;