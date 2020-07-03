import React,{
    PureComponent
} from 'react';

interface Props {
    show: boolean,
    duration: number,
    onShown: Function,
    onClosed: Function,
    onClick: Function
}

interface State {
    show: boolean
}

import styles from './styles.scss';

class Mask extends PureComponent<Props, State> {
    static defaultProps = {
        show: false,
        duration: 400,
        onClick: () => null,
        onShown: () => null,
        onClosed: () => null
    }

    timers:Array<any> = [];

    state: State = {
        show: false
    }

    componentDidMount() {
        this.onShowFn();
    }

    componentWillUnmount() {
        this.timers.forEach(
            (time:any) => (
                clearTimeout(time)
            )
        )
        this.timers = [];
    }

    componentDidUpdate() {
        const {
            show
        } = this.props;

        const {
            show: stateShow
        } = this.state;

        if (show === stateShow) {
            return false
        }

        //显示
        if (show) {
            this.onShowFn();
        }
        else {
            this.onCloseFn();
        }
    }

    private onShowFn = () => {
        const ms: number = 16;
        this.timers.push(
            setTimeout(() => {
                this.setState({
                    show: true
                }, this.onShown);
            }, ms)
        );
    }

    private onShown = () => {
        const {
            duration,
            onShown
        } = this.props;
        this.timers.push(
            setTimeout(
                onShown,
                duration
            )
        )
    }

    private onCloseFn = () => {
        const ms: number = 16;
        this.timers.push(
            setTimeout(() => {
                this.setState({
                    show: false
                }, this.onClosed);
            }, ms)
        );
    }

    private onClosed = () => {
        const {
            duration,
            onClosed
        } = this.props;
        this.timers.push(
            setTimeout(
                onClosed,
                duration
            )
        )
    }

    private onClick = () => {
        const {
            onClick
        } = this.props;
        onClick();
    }

    get calcStyle() {
        const {
            show
        } = this.state;

        const {
            duration
        } = this.props;

        return {
            opacity: show ? 1 : 0,
            backgroundColor: `rgba(0,0,0,.4)`,
            transitionDuration: `${duration}ms`,
            WebkitTransitionDuration: `${duration}ms`,
        }
    }

    render() {
        return (
            <div
                onClick={this.onClick}
                style={this.calcStyle}
                className={styles.dialog_mask_layer}
            />
        )
    }
}


export default Mask;