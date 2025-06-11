import { popup } from './popup.js';
import { hidePreloader } from './helpers.js';

popup.init();
window.popup = popup;

hidePreloader();
