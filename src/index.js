import {createHome, createMenuItems, createAboutItems} from './content.js';
import './styles.css';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

homeBtn.addEventListener('click', () => {
    clearContent();
    createHome();
});

menuBtn.addEventListener('click', () => {
    clearContent();
    createMenuItems();
});

aboutBtn.addEventListener('click', () => {
    clearContent();
    createAboutItems();
});


createHome();