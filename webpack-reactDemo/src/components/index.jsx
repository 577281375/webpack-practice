import React, { Component } from "react";
import { RouteWithSubRoutes } from "untils";



// @RouteWithSubRoutes(['/tacos/bus','/tacos/cart'])
class Tacos extends Component {
    render() {
        console.log(this.props, "this.props")
        return (
            <div>
                <h2>Tacos</h2>
                {/* <ul>
                    <li><Link to="/tacos/bus">Bus</Link></li>
                    <li><Link to="/tacos/cart">Cart</Link></li>
                </ul> */}
            </div>
        )
    }
}


class Sandwiches extends Component {
    render() {
        return (<div> Sandwiches</div>)
    }
}



class Bus extends Component {
    render() {
        return (<div> Bus</div>)
    }
}
class Cart extends Component {
    render() {
        return (<div> Cart</div>)
    }
}
export default { Sandwiches, Tacos, Bus, Cart };