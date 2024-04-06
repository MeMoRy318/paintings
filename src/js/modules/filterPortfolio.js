const filterPortfolio = () => {
  const menu = document.querySelector('.portfolio-menu');
  const menuItems = menu.querySelectorAll('li');
  const portfolioNoMessage = document.querySelector('.portfolio-no');
  const portfolioBlocks = document.querySelectorAll('.portfolio-block');
  
  const hidePortfolioBlocks = () => {
    menuItems.forEach(item => {
      item.classList.remove('active');
    });

    portfolioBlocks.forEach(item => {
      item.style.display = 'none';
      item.classList.remove('animated', 'fadeIn');
      portfolioNoMessage.style.display = 'none';
      portfolioNoMessage.classList.remove('animated', 'fadeIn');
    });
  };
  
  const showFilteredBlocks = (selector = 'all') => {
    menuItems.forEach(item => {
      if (item.classList.contains(selector)) {
        item.classList.add('active');
      }
    });
  
    portfolioBlocks.forEach(item => {
      const matchesSelector = item.classList.contains(selector);
  
      if (selector === 'grandmother' || selector === 'granddad') {
        portfolioNoMessage.style.display = 'block';
        portfolioNoMessage.classList.add('animated', 'fadeIn');
      } else if (matchesSelector) {
        item.style.display = 'block';
        item.classList.add('animated', 'fadeIn');
      }
    });
  };
  
  hidePortfolioBlocks();
  showFilteredBlocks();
  
  menu.addEventListener('click', (event) => {
    const target = event.target;
    const attribute = target?.getAttribute('data-portfolio');
  
    if (target && attribute) {
      hidePortfolioBlocks();
      showFilteredBlocks(attribute);
    }
  });
};
  
export default filterPortfolio;
  