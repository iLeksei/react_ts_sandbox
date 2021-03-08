import {action, createAction} from "typesafe-actions";
import {Action} from "redux";
// import {DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER} from "../constants/reduxActions";
import { CounterEnum } from "../enums/CounterEnum";

export const increment = () => action(CounterEnum.INCREMENT_COUNTER);
export const decrement = () => action(CounterEnum.DECREMENT_COUNTER);
export const reset = () => action(CounterEnum.RESET_COUNTER);

export type CounterAction = Action<typeof increment | typeof decrement | typeof reset>;
