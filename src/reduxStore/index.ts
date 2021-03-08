import { combineReducers } from 'redux'
import {counterReducer} from "./counter";
import {tableReducer} from "./table";

const mainReducer = combineReducers({
    counterReducer,
    tableReducer,
});

export type RootReducer = ReturnType<typeof mainReducer>;

export default mainReducer;