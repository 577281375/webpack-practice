/*
 * @Author: songxue
 * @Date: 2018-12-04 11:19:20
 * @Last Modified by: songxue
 * @Last Modified time: 2018-12-04 13:49:30
 * @Module Name: 路由出口统一处理
 */

import React, { Component } from "react";
import { Route, Link } from "react-router-dom";


const RouteWithSubRoutes = (urls) => (WrapperComponent) => {
    class Containers extends Component {
        render() {
            const {routes} = this.props;
            const routeOutput =  routes.map((route, i) => {
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            render={props => {
                                return (<route.component {...props} routes={route.routes} />)
                            }}
                        />
                    )
            })
            const WrapperOutput = urls.map((url, i) => {
               return  (<div key={i}>
                    <Link to={url}>{url + '--------url'}</Link>
                </div>)
            })
            return (
                <div>
                    {WrapperOutput}
                    {routeOutput}
                </div>
            )
        }
    }
    return Containers;
}

export { RouteWithSubRoutes };
