import 'font-awesome/css/font-awesome.css';

import component from './component';
import anImage from './an-image';
// import 'purecss';
import './main.css';

const func = () => 'func';

console.log(func());

document.body.appendChild(component('Different text hot reloaded'));
document.body.appendChild(anImage());
