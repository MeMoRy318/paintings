const accordion = (triggerSelector, activeTriggerClass, activeAccordionClass) => {
  const triggers = document.querySelectorAll(triggerSelector);
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const nextElement = trigger.nextElementSibling;
      const isExpanded = nextElement.classList.contains(activeAccordionClass);
      const accordionHeight = nextElement.scrollHeight + 70;
  
      if (isExpanded) {
        nextElement.classList.remove(activeAccordionClass);
        nextElement.style.maxHeight = '0px';
        trigger.classList.remove(activeTriggerClass);
      } else {
        nextElement.classList.add(activeAccordionClass);
        nextElement.style.maxHeight = `${accordionHeight}px`;
        trigger.classList.add(activeTriggerClass);
      }
    });
  });
};
  
export default accordion;
  