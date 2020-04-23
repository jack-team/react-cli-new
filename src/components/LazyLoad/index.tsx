import React,{
    useState,
    useEffect
} from 'react';

interface InitState {
    Component:any
}

const initState:InitState = {
    Component:null
}

const LazyLoad = (loadFn:Function) => {
    return (props:any) => {
        const [
            {Component},
            setView
        ] = useState(initState);

        const loadRes = async () => {
            try {
                const res = await loadFn();
                setView({
                    Component:res.default
                })
            }
            catch (e) {
                console.log(e)
            }
        }

        useEffect(() => {
            loadRes()
        },[loadFn])

        return !!Component ? (
            <Component {...props} />
        ) : null;
    }
}

export default LazyLoad;