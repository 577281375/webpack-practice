import PrintMe from "./print";
import "./styles.css";
import "./common.css";
import "@babel/polyfill";

if (process.env.NODE_ENV !== 'production') {
    console.log('Look like we are in development mode!');
}

async function getComponent() {
    var element = document.createElement("div");
    const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
    element.innerHTML = _.join(['hello', 'webpack'], '~');
    return element;
}

// function getComponent() {
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//         var element = document.createElement("div");
//         element.innerHTML = _.join(['hello', 'webpack'], '~');
//         return element;
//     }).catch(error => 'An error occurred while loading the component!')

// }


getComponent().then(component => {
    console.log(component)
    document.body.appendChild(component)
})