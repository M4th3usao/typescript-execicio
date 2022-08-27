// Import stylesheets
import './style.css';
import { Person } from './person.ts';

// Write TypeScript code!

let dados = new Person('Matheus', 'Henrique', 'Cruz', 30);

const appName: HTMLElement = document.getElementById('app.text');
appName.innerHTML = `
<p>${dados.getFullName()}</p>
<p>${dados.getBirthdayYear()}</p
<p>${dados.listEmail}</p>
`;
