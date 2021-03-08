// @ts-ignore
import {connect} from "react-redux";
import {Counter as Component} from "./Counter";
import {RootReducer} from "../../reduxStore";
import {bindActionCreators, Dispatch} from "redux";
import {CounterAction, decrement, increment, reset} from "../../reduxActions/counter";

type StateProps = {
    counter: number,
}

type DispatchProps = {
    increment: () => void,
    decrement: () => void,
    reset: () => void,
}

export const mapStateToProps = (state: RootReducer): StateProps => ({
    counter: state.counterReducer.counter
});

export const mapDispatchToProps = (dispatch: Dispatch<CounterAction>): DispatchProps => bindActionCreators({
    increment,
    decrement,
    reset,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);