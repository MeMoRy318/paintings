const showMoreStyle = (triggerSelector,styleCardsSelector) => {
  const trigger = document.querySelector(triggerSelector);
  const cards = document.querySelectorAll(styleCardsSelector);

  trigger.addEventListener('click',() =>{
    cards.forEach(card => {
      card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      card.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    });
    trigger.remove();
  });
};

export default showMoreStyle;