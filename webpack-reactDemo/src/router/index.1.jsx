import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { RouteWithSubRoutes } from "untils";
import { routes } from "./config";


//试着写 修饰器   没有任何意义
// @RouteWithSubRoutes(['/tacos','/sandwiches'])
// class RouteConfigExample extends Component {
//     render() {
//         return (
//             <Route>
//                 <div>
//                     {/* <ul>
//                         <li>
//                             <Link to="/tacos">Tacos</Link>
//                         </li>
//                         <li>
//                             <Link to="/sandwiches">Sandwiches</Link>
//                         </li>
//                     </ul> */}
//                 </div>
//             </Route>
//         )
//     }
// }

class RouteConfigExample extends Component {
    render() {
        // const RouteElement = ({ route}) => {
        //     return (
        //         <Route
        //             path={route.path}
        //             render={ props => {
        //                 return (<route.component {...props} routes={route.routes} />)
        //             }}
        //         />
        //     )
        // }
        const RouteOutput = ({routes}) => {
            const result = routes.map((route, i) => {
                return (
                    <Route
                        path={route.path}
                        render={props => {
                            return (<route.component {...props} routes={route.routes} />)
                        }}
                        key= {i}
                    />
                )
             })
            return result;
        }
        const { routes } = this.props;
        //如果是 嵌套的数据 应该是把二级菜单的route全部显示出来 生成一个component 然后就可以了
        const RouteComponent = ({ routes }) => {
            const result = routes.map((route, i) => {
                if (route.routes && Array.isArray(route.routes)) {
                    console.log(route.routes,'route.routes')

                }
                return (
                    // < RouteElement route={route} key={i} />
                    <div key={i}>
                        <Link to={route.path}>{route.path.split('/')[1]}</Link>
                    </div>
                )
            })
            return result;
        }
        return (
            <Route>
                <ul>
                    <RouteComponent routes={routes}/>
                    <RouteOutput routes={routes} />
                </ul>
            </Route>
        )
    }
}
export default RouteConfigExample;

