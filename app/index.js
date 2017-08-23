import 'font-awesome/css/font-awesome.css';
import react from 'react';

import component from './component';
import anImage from './an-image';
// import 'purecss';
import './main.css';
import { bake } from './shake';

bake();

const func = () => 'func';

console.log(func());
console.log(react);
console.log('bla');

document.body.appendChild(component('Different text hot reloaded'));
document.body.appendChild(anImage());
