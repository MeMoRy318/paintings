const checkInputText = (inputSelecor) => {
  const inputs = document.querySelectorAll(inputSelecor);

  inputs.forEach(item => {
    item.addEventListener('input',()=>{
      item.value = item.value.replace(/[^а-яА-Я0-9\s]/g, '');
    });
  });
};

export default checkInputText;