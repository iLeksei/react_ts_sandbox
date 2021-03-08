import {cloneDeep} from "../utils/commonUtils";
import {CounterAction} from "../reduxActions/counter";
import {createReducer, Reducer} from "typesafe-actions";
import {CounterEnum} from "../enums/CounterEnum";

const {INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER} = CounterEnum;

export interface IStore {
    counter: number,
}

const initialStore = {
    counter: 0,
};

const actionIncrementCounter = (store: IStore, action: CounterAction): IStore => {
    const newStore = cloneDeep(store);
    newStore.counter = ++newStore.counter;
    return newStore;
};
const actionDecrementCounter = (store: IStore, action: CounterAction): IStore => {
    const newStore = cloneDeep(store);
    newStore.counter = --store.counter;
    return newStore;
};

const actionResetCounter = (store: IStore, action: CounterAction): IStore => {
    const newStore = cloneDeep(store);
    newStore.counter = 0;
    return newStore;
};

const consoleCounter = (store: IStore, action: CounterAction): IStore => {
    console.log(store);
    return store;
}

export const counterReducer: Reducer<IStore, any> = createReducer<IStore>(initialStore)
    .handleType(INCREMENT_COUNTER, actionIncrementCounter)
    .handleType(DECREMENT_COUNTER, actionDecrementCounter)
    .handleType(RESET_COUNTER, actionResetCounter);