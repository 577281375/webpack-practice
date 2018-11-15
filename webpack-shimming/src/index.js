import { helpers, file } from "./globals";
console.error(process.env.foo, ".env.foo");
// if (!PRODUCTION) {
//     console.log('Debug info')
// }

// if (PRODUCTION) {
//     console.log('Production log')
// }
//判断浏览器是否支持 es6  && fetch
var moderBrowser = (
    'fetch' in window &&
    'assign' in Object
)

if (!moderBrowser) {
    var scriptElement = document.createElement('script');
    scriptElement.async = false;
    scriptElement.src = '/polyfills.bundle.js';
    document.dead.appendChild(scriptElement);
}


function component() {
    var element = document.createElement('div');
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ~');
    element.innerHTML = join(['Hello', 'webpack'], ' ~');
    // this.alert('Hmmm, this probably isn\'t a great idea...')
    return element;
}


document.body.appendChild(component());


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        // console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
        // console.log(json)
    })
    .catch(error => console.error('Something went wrong when fetching this data: ', error))