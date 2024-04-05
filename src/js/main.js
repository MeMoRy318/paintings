import checkInputText from './modules/checkInputText';
import forms from './modules/forms';
import mask from './modules/mask';
import { modal, showWhenScrolling,showByTime } from './modules/modal';
import showMoreStyle from './modules/showMoreStyle';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded',()=>{
  const modalState = {usedFlag:false}; 

  modal( '.button-design', '.popup-close', '.popup-design', false, modalState);
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
});