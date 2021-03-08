import React from "react";
import {connect} from "react-redux";

import {Table as Component} from "./Table";
import {bindActionCreators, Dispatch} from "redux";
import {RootReducer} from "../../reduxStore";
import {TableAction} from "../../reduxActions/table";
import {TableController} from "../../controllers/tableController";

export type StateProps = {
    data: TableDto[]
}

export type DispatchProps = {
    getTableData: () => void,
}

export const mapStateToProps = (state: RootReducer):StateProps => ({
  data: state.tableReducer.tableData,
})

export const mapDispatchToProps = (dispatch: Dispatch<TableAction>):DispatchProps => bindActionCreators({
    getTableData: TableController.getTableData,
}, dispatch);


export default connect<StateProps, DispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(Component);