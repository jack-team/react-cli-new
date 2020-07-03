import React,{
    PureComponent
} from 'react';

import {
    createPortal
} from 'react-dom';

export type Direction =
    'top' |
    'bottom' |
    'left' |
    'right' |
    'center' |
    'none';

interface Props {
    show: boolean,
    duration: number,
    onClose: Function,
    direction: Direction
}

interface State {
    show: boolean,
    maskShow: boolean,
    contentShow: boolean
}

import Container from './container';

class Dialog extends PureComponent<Props, State> {
    static defaultProps = {
        show: false,
        duration: 400,
        direction: 'center',
        onClose: () => null
    }

    state: State = {
        show: false,
        maskShow: false,
        contentShow: false
    }

    static getDerivedStateFromProps(
        nextProps: Props,
        prevState: State
    ) {
        const {
            show: propShow
        } = nextProps;


        const {
            show: stateShow
        } = prevState;

        if (stateShow === propShow) {
            return null;
        }

        //显示
        if (propShow) {
            return {
                show: true,
                maskShow: true,
                contentShow: true
            }
        }
        //隐藏
        else {
            return {
                maskShow: false,
                contentShow: false
            }
        }
    }

    private onClosed = () => {
        this.setState({
            show: false
        })
    }

    render() {
        const {
            show,
            maskShow,
            contentShow
        } = this.state;

        const {
            onClose,
            children,
            duration,
            direction
        } = this.props;

        const content = (
            <Container
                duration={duration}
                children={children}
                maskShow={maskShow}
                direction={direction}
                onMaskClick={onClose}
                contentShow={contentShow}
                onContentClosed={this.onClosed}
            />
        );

        return show ? createPortal(
            content, document.body) : null;
    }


}

export default Dialog;