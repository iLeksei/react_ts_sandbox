import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {mapDispatchToProps, mapStateToProps} from "./TableHOC";
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";


interface IProps {
}

interface IState {
    data: TableDto[]
}

type Props = ReturnType<typeof mapStateToProps> &
             ReturnType<typeof mapDispatchToProps> &
             IProps;

export class Table extends React.Component<Props, IState> {

    state = {
        data: [],
    }

    componentDidMount() {
        console.log("component was mounted!");
        this.props.getTableData();
    }

    getTableData = () => this.props.getTableData();

    render() {
        return (
            <Row>
                <BreadcrumbsItem to={'/table'}>
                    Table
                </BreadcrumbsItem>
                <Row>
                    <Col>
                        <Button
                            id="download-btn"
                            onClick={this.getTableData}
                        >Download</Button>
                    </Col>
                </Row>
                <Row>
                    <div className="table__wrapper">

                    </div>
                </Row>
            </Row>
        );
    }
}
