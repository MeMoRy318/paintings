import calckScroll from './calckScroll';

const modal = ( triggerSelector, closeSelector, modalSelector, destroyed = false, modalState) => {
  const trigger = document.querySelectorAll(triggerSelector);
  const close = document.querySelectorAll(closeSelector);
  const modal = document.querySelector(modalSelector);
  const windows = document.querySelectorAll('[data-modal]');

  const closeAllModal = () => windows.forEach(item => item.style.display = 'none');

  trigger.forEach(item => {
    item.addEventListener('click',(event) =>{
      if(event.target){
        event.preventDefault();
      }
      closeAllModal();
      modal.style.display = 'block';
      modalState.usedFlag = true;
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${calckScroll()}px`;
      if(destroyed){
        item.remove();  
      }
    });
  });

  close.forEach(item => item.addEventListener('click', () => {
    closeAllModal();
    document.body.style.overflow = ''; 
    document.body.style.marginRight = '0px';
  }));

  modal.addEventListener('click', (event) => {
    if(event.target === modal){
      closeAllModal();
      document.body.style.overflow = ''; 
      document.body.style.marginRight = '0px';
    }
  });
};

const showWhenScrolling = (triggerSelector, watchSelector, modalState) => {
  const triggerElement = document.querySelector(triggerSelector);
  const watchElement = document.querySelector(watchSelector);
  
  const options = {
    threshold: 0.8,
  };
    
  function handleIntersection(entries) {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && !modalState.usedFlag) {
      triggerElement.click();
      observer.disconnect();
    }
  }
  
  const observer = new IntersectionObserver(handleIntersection, options);
  
  observer.observe(watchElement);
};
  
const showByTime = ( triggerSelector, time, modalState ) => {
  setTimeout(()=>{
    if(!modalState.usedFlag){
      document.querySelector(triggerSelector).click();
    }
  },time);
};

  
export { modal, showWhenScrolling, showByTime};