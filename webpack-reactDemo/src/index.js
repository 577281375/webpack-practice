import _ from 'lodash';
import  "GlobalUtils/index.js";
// import "@/assets/css/index.css"
// import className from './index.less';
import className2 from '@/assets/css/index.css';

import "@/untils/b.js";
import "@/untils/index.js";
import "@/assets/css/a.css";
import "./index.less";




// import "./index.less";
// console.log(le)
// console.log(className)
console.log(className2)

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], '~');
    // element.classList.add(className2.classA);
    return element;
}
document.body.appendChild(component());