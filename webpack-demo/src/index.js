// import _ from 'lodash';
// import "./styles.css";
// import "./common.css";
// if (process.env.NODE_ENV !== 'production') {
//     console.log('Look like we are in development mode!');
// }

// function component() {
//     var element = document.createElement('div');
//     var button = document.createElement('button');
//     var br = document.createElement('br');
//     button.innerHTML = 'Click me and look at the console!';
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.appendChild(br);
//     element.appendChild(button);
//     button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
//         var print = module.default;
//         print();
//     });
//     return element;
// }


// document.body.appendChild(component());





import _ from 'lodash';
import "./styles.css";
import Print from "./Print";
import { cube} from "./math";

if (process.env.NODE_ENV !== 'production') {
    console.log('Look like we are in development mode!');
}

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    console.log(cube);
    element.onclick = Print.bind(null, 'Hello webpack');
    return element;
}


document.body.appendChild(component());