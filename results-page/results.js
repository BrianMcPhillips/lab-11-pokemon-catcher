import { loadFromLocalStorage } from '../Utils.js';
const encounteredSpan = document.getElementById('encountered');
//const caughtSpan = document.getElementById('caught');

const data = loadFromLocalStorage();
const stringyData = JSON.stringify(data);

encounteredSpan.textContent = `Pokemon encountered ${stringyData} `;
console.log(data);