import React from 'react';
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import {Row, Button, Modal} from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert';

import "./counter.scss";
import {mapDispatchToProps, mapStateToProps} from "./CounterHOC";

export interface IProps {
}

interface IState {
}

type Props = ReturnType<typeof mapStateToProps> &
             ReturnType<typeof mapDispatchToProps> &
             IProps;

export class Counter extends React.Component<Props, IState> {
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<IState>, nextContext: any): boolean {
        return this.props.counter !== nextProps.counter
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<IState>, snapshot?: any) {
        if (this.props.counter === 3) {
            throw new Error("it's 3 !");
        }
    }

    state = {
    }

    onClickReset = ():void => {
        confirmAlert({
            title: 'Confirm to reset counter',
            message: 'Do you really want to reset counter!?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.props.reset()
                },
                {
                    label: 'Close',
                    onClick: () => null
                }
            ],
            closeOnClickOutside: false,
        });
    }

    render() {
        const example = {a: {b: {c: "done"}}}
        console.log(example)

        const { increment, decrement, reset, counter } = this.props;
        return (
            <Row>
                <BreadcrumbsItem to={'/counter'}>
                    counter
                </BreadcrumbsItem>
                <div className="main__container">
                    <div className="main__counter-wrapper">
                        <nav>
                            <button id="increment-counter" onClick={() => increment()}>increment</button>
                            <button id="decrement-counter" onClick={() => decrement()}>decrement</button>
                            <button id="reset-counter" onClick={this.onClickReset}>reset</button>
                        </nav>
                        <div className="main__counter-element">{counter}</div>
                    </div>
                </div>
            </Row>
        );
    }
}