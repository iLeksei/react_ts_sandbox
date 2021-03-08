import {createReducer, Reducer} from "typesafe-actions";
import { TableEnum } from "../enums/TableEnum";
import {cloneDeep} from "../utils/commonUtils";
import {setTableData, TableAction, useLoader} from "../reduxActions/table";
const {USE_LOADER, SET_TABLE_DATA} = TableEnum;

interface IStore {
    tableData: TableDto[],
    showLoader: boolean,
}

const initialStore: IStore = {
    tableData: [],
    showLoader: false,
}

type UseLoaderAction = { type: 'USE_LOADER', payload: boolean };
export const actionUseLoader = (store: IStore, action: UseLoaderAction): IStore => {
    const result = cloneDeep(store);
    result["showLoader"] = action.payload;
    return result;
}

type SetTableDataAction = { type: 'SET_TABLE_DATA', payload: TableDto[] };
export const actionSetTableData = (store: IStore, action: SetTableDataAction): IStore => {
    const result = cloneDeep(store);
    result["tableData"] = action.payload;
    return result;
}

type Action =  UseLoaderAction | SetTableDataAction;
export const tableReducer: Reducer<IStore, any> = createReducer<IStore, Action>(initialStore)
    .handleType(USE_LOADER, actionUseLoader)
    .handleType(SET_TABLE_DATA, actionSetTableData);
