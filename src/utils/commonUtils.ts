import {ThunkAction} from "redux-thunk";
import {RootReducer} from "../reduxStore";
import {Action} from "redux";

export const cloneDeep = <T>(entity: T): T => JSON.parse(JSON.stringify(entity));

export const getHost = (): string => "http://127.0.0.1:1414/"; // /server/

export type AsyncAction = ThunkAction<void, RootReducer, unknown, Action>