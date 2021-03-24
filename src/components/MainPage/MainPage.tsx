import React from "react";
import { Profiler } from "react";
import { Suspense } from "react";
import {Container, Row, Col, Breadcrumb as BreadcrumbContainer, Navbar} from "react-bootstrap";
import {Breadcrumbs, BreadcrumbsItem} from 'react-breadcrumbs-dynamic'
// @ts-ignore
import {Switch, Route} from "react-router-dom";
import {isEqual} from "lodash";

const Counter = React.lazy(() => import("../Counter/CounterHOC"));
const Table = React.lazy(() => import("../Table/TableHOC"));
const NavItem = React.lazy(() => import("../NavItem/NavItem"));

import "./mainPage.scss";
import ErrorBoundary from "../ErrorBoundary";
import {Menu} from "../Menu/Menu";
import {Dictionary} from "../../types/commonTypes";

export class MainPage extends React.Component<any, any> {

    state = {
        menuList: [
            { value: "/table",      label: "Таблица" },
            { value: "/counter",    label: "Счетчик" },
        ] as Dictionary[]
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
       return this.checkUpdate(nextState);
    }

    checkUpdate = (nextState: any):boolean => {
        if (nextState.menuList !== null && isEqual(this.state.menuList, nextState.menuList)) {
            return false;
        }
        return true;
    }

    render() {
        // @ts-ignore
        // @ts-ignore
        return (
            <Container fluid>
                    <Navbar bg="light" expand="md">
                        <Menu menuList={this.state.menuList} />
                    </Navbar>
                    <div className="mainPage__progressLine" id="progress-line" />
                    <BreadcrumbsItem to={'/main'}>
                        Main
                    </BreadcrumbsItem>
                    <Breadcrumbs
                        item={NavItem}
                        finalProps={{active: true}}
                        container={BreadcrumbContainer}
                        duplicateProps={{to: 'href'}}
                    />
                    <Container>
                        <Suspense fallback={"...loading"}>
                            <Switch>
                                <ErrorBoundary>
                                    <Profiler id={"counter"} onRender={(...settings) => {console.log(settings)}}>
                                        <Route exact  path={"/counter"} component={Counter}/>
                                        <Route exact path={"/table"} component={Table} />
                                    </Profiler>
                                </ErrorBoundary>
                            </Switch>
                        </Suspense>
                    </Container>
            </Container>
        );
    }
}