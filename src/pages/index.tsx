import React,{
    useState,
    useEffect,
    useCallback
}from 'react';

import {
    Link
} from 'react-router-dom';

import './../styles/common.scss'

const Page = (props:any) => {
    const [
        count,
        setCount
    ] = useState(0);

    const onClick = useCallback(() => (
        setCount(count + 1)
    ),[count]);

    useEffect(() => {
        console.log(`挂载了`)
        return () => {

        }
    },[0])

    return (
        <div>
            <button onClick={onClick}>
                点击
            </button>
            <Link to="/a" role="button">
                跳转页面{count}
            </Link>
        </div>
    )
}

export default Page;