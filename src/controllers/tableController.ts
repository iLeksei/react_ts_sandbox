import request from "superagent";
import {setTableData, useLoader} from "../reduxActions/table";
import {AsyncAction, getHost} from "../utils/commonUtils";
import {Dispatch} from "redux";

export class TableController {

    //todo add test
    public static getTableData = ():AsyncAction => (dispatch:Dispatch) => {
        dispatch(useLoader(true));
        return request.get(getHost() + "tableData")
            .then((res: any): TableDto[] => res)
            .then((data: TableDto[]):void => {
                dispatch(setTableData(data));
                dispatch(useLoader(false));
            })
            .catch((err: any) => {
                console.error(err.stack);
                dispatch(useLoader(false));
            })
    }

}