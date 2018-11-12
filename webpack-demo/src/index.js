import PrintMe from "./print";
import "./styles.css";
import "./common.css";
if (process.env.NODE_ENV !== 'production') {
    console.log('Look like we are in development mode!');
}

function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement("div");
        element.innerHTML = _.join(['hello', 'webpack'], '~');
        return element;
    }).catch(error=>'An error occurred while loading the component!')

}

getComponent().then(component => {
    console.log(component)
    document.body.appendChild(component)
})