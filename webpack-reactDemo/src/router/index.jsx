import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { RouteWithSubRoutes } from "untils";
import { routes } from "./config";

class RouteConfigExample extends Component {
    render() {
        //路由出口组建
        const RouteElement = ({ route } ) => {
            return (
                <Route
                    path={route.path}
                    render={ props => {
                        return (<route.component {...props} routes={route.routes} />)
                    }}
                />
            )
        }
        //路由导航组建
        const RouteLink = ({ route }) => {
            return (
                <div>
                    <Link to={route.path}>{route.path.split('/')[1]}</Link>
                </div>
            )
        }

        //当 组建里没有嵌套路由的时候  component 组建是自建导航组建 否则就是自己配置的组建
        const renderComponent = ({ routes }) => {
            let _routes = routes;


            // _routes.map((route,i) => {
            //     route
            // })
            if (_routes.routes && Array.isArray(_routes.routes)) {
                class NewComponent extends Component{
                    render() {
                        return (
                            <div>
                                <RouteLink route={routes}/>
                                <renderComponent route={routes}/>
                            </div>
                        )
                    }
                }
                _routes.component = NewComponent;
            } else {
                routes.map((route, i) => {

                    if (route.routes) {
                        return renderComponent(route.routes)
                    } else {
                        return (
                            <div>
                                <RouteLink route={route} />
                                <renderComponent route={route} />
                            </div>
                        )
                    }
                })
            }
        }



        // const RouteOutput = ({routes}) => {
        //     const result = routes.map((route, i) => {
        //         return (
        //             <Route
        //                 path={route.path}
        //                 render={props => {
        //                     return (<route.component {...props} routes={route.routes} />)
        //                 }}
        //                 key= {i}
        //             />
        //         )
        //      })
        //     return result;
        // }
        // const { routes } = this.props;
        // //如果是 嵌套的数据 应该是把二级菜单的route全部显示出来 生成一个component 然后就可以了
        // const RouteComponent = ({ routes }) => {
        //     const result = routes.map((route, i) => {
        //         if (route.routes && Array.isArray(route.routes)) {
        //             console.log(route.routes,'route.routes')

        //         }
        //         return (
        //             // < RouteElement route={route} key={i} />
        //             <div key={i}>
        //                 <Link to={route.path}>{route.path.split('/')[1]}</Link>
        //             </div>
        //         )
        //     })
        //     return result;
        // }
        return (
            <Route>
                <renderComponent routes={routes}/>
                {/* <ul>
                    <RouteComponent routes={routes}/>
                    <RouteOutput routes={routes} />
                </ul> */}
            </Route>
        )
    }
}
export default RouteConfigExample;

