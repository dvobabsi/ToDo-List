import './index.html';
import './scss/main.scss';
import {printMe, mult, sum } from './components/print';
import json from './assets/json';
import WebpackLogo from './assets/img/webpack-logo.png';


function component() {
  const element = document.createElement('div');
  const br = document.createElement('br');
  const images = document.createElement('img');
  const btn = document.createElement('button');

  element.innerHTML = 'Hello webpack!';
  element.style.margin = '0 auto';
  element.style.width = '600px';
  element.style.textAlign = 'center';

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  images.src = WebpackLogo;
  images.width = 200;
  images.style.display = 'block';
  images.style.margin = '0 auto';

  element.appendChild(br);
  element.appendChild(btn);
  element.appendChild(images);


  return element;
}

console.log(json);
console.log(WebpackLogo);
console.log(json);
document.body.appendChild(component());

console.log(mult(5, 5));
console.log(sum(6, 6));