import accordion from './modules/accordion';
import burgerMenu from './modules/burgerMenu';
import calc from './modules/calc';
import checkInputText from './modules/checkInputText';
import filterPortfolio from './modules/filterPortfolio';
import forms from './modules/forms';
import linkUp from './modules/linkUp';
import mask from './modules/mask';
import { modal, showWhenScrolling,showByTime } from './modules/modal';
import pictureSize from './modules/pictureSize';
import showMoreStyle from './modules/showMoreStyle';
import sliders from './modules/sliders';
import smoothScrolling from './modules/smoothScrolling';

window.addEventListener('DOMContentLoaded',()=>{
  const modalState = {usedFlag:false}; 

  modal( '.button-design', '.popup-close', '.popup-design', false, modalState);
  modal( '.button-consultation', '.popup-close', '.popup-consultation', false, modalState);
  modal( '.fixed-gift', '.popup-gift popup-close', '.popup-gift', true, modalState);
  showWhenScrolling('.fixed-gift','.footer', modalState);
  showByTime( '.button-design', 60000, modalState );

  sliders('.main-slider-item','vertical');
  sliders('.feedback-slider-item','','.main-prev-btn','.main-next-btn');

  forms();
  checkInputText('[name="name"]');
  checkInputText('[name="message"]');
  mask('[name="phone"]','+7 (___) ___ __ __');

  showMoreStyle('.button-styles','.styles-2');

  calc('#size','#material','#options','.promocode','.calc-price');

  filterPortfolio();

  pictureSize();

  accordion('.accordion-heading','active-style','accordion-content');

  burgerMenu('.burger','.burger-menu');

  smoothScrolling(0.2);
  
  linkUp('.pageup');
});