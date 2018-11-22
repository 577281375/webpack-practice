import _ from 'lodash';
import  "GlobalUtils/index.js";
// import "@/assets/css/index.css"
// import className from './index.less';
import className2 from '@/assets/css/index.css';

import "@/untils/b.js";
import "@/untils/index.js";
import "@/assets/css/a.css";
import Icon from "@/assets/images/WechatIMG5.jpg";

import "./index.less";

import Demo from "components/index.jsx";
console.log(Demo)



// import "./index.less";
// console.log(le)
// console.log(className)
// console.log(className2)

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], '~');
    var myIcon = new Image();
    myIcon.src = Icon;
    console.log(Icon,"Icon")
    // element.classList.add(className2.classA);
    element.appendChild(myIcon);
    return element;
}
document.body.appendChild(component());