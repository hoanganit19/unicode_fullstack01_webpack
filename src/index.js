import config from  './config.json';

import 'bootstrap/dist/css/bootstrap.min.css';

//import _ from "lodash";
import './style.css';
//import './assets/css/core.css';
import './assets/scss/core.scss';

import header from './templates/header.html';

import footer from './templates/footer.tpl';

import Toastify from 'toastify-js'

import "toastify-js/src/toastify.css"

const component = () => {
    const element = document.createElement('h1');
    element.innerHTML = 'Unicode Academy - Fullstack <button class="btn btn-primary">Xem thêm</button>';
    return element;
}

document.querySelector('body').innerHTML = header;

document.querySelector('body').appendChild(component());

document.querySelector('body').innerHTML += footer;

console.log(config);

Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();