import {action, createAction} from "typesafe-actions";
import {TableEnum} from "../enums/TableEnum";
import {Action} from "redux";
import {decrement, increment, reset} from "./counter";
import {TableController} from "../controllers/tableController";

export const useLoader = (payload: boolean) => action(TableEnum.USE_LOADER, payload);
export const setTableData = (payload: TableDto[]) => action(TableEnum.SET_TABLE_DATA, payload);

export type TableAction = Action<typeof setTableData | typeof useLoader | typeof TableController.getTableData>;