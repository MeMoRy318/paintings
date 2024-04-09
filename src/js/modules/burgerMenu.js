const burgerMenu = (triggerSelector, menuSelector) => {
  const trigger = document.querySelector(triggerSelector);
  const menu = document.querySelector(menuSelector);
  
  const toggleMenu = () => {
    const isCursorPointer = getComputedStyle(trigger).cursor;
    const isMenuActive = menu.style.display === 'block';
  
    if (isCursorPointer === 'pointer' && !isMenuActive) {
      menu.style.display = 'block';
    } else {
      menu.style.display = '';
    }
  };
  

  const handleResize = () => {
    const isCursorPointer = getComputedStyle(trigger).cursor;
    const isMenuActive = menu.style.display === 'block';
  
    if (isCursorPointer === 'auto' && isMenuActive) {
      menu.style.display = '';
    }
  };
  
  
  trigger.addEventListener('click', toggleMenu);
  window.addEventListener('resize', handleResize);
  
};
  
export default burgerMenu;
  