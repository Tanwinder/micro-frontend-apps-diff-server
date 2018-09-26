import { Application, render } from './application';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    render(Application, document.getElementById('app'));
});
