import _ from "lodash";
import PrintMe from "./print";
import "./styles.css";
import "./common.css";

import { cube } from "./math";
if (process.env.NODE_ENV !== 'production') {
    console.log('Look like we are in development mode!');
}

function component() {
    var element = document.createElement("div");
    var btn = document.createElement('button');
    // element.innerHTML = _.join(['hello', 'webpack'], '~');
    element.innerHTML = [
        'hello webpack',
        '5 cube is equal to' + cube(5)
    ].join('\n\n')
    btn.innerHTML = "click me and check the console!";
    btn.classList.add('common');
    btn.onclick = PrintMe;
    element.appendChild(btn);
    return element;
}

let element = component();
document.body.appendChild(element);
if (module.hot) {
    module.hot.accept("./print.js", function () {
        console.log('Accept the updated PrintMe module!');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}