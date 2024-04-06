const calc = ( sizeSelector, materialSelector, optionsSelector, promocodeSelector, calcPriceSelector ) =>{
  const size = document.querySelector(sizeSelector);
  const material = document.querySelector(materialSelector);
  const options = document.querySelector(optionsSelector);
  const promocode = document.querySelector(promocodeSelector);
  const calcPrice = document.querySelector(calcPriceSelector);

  let sum = 0;

  const calcForm = () => {
    sum = Math.round(+size.value + +material.value + +options.value);

    if(!+size.value || !+material.value){
      calcPrice.innerText = 'Пожалуйста, выберите размер и материал картины';
    }else if(promocode.value === 'IWANTPOPART'){
      calcPrice.innerText = Math.round(sum * 0.7);
    }else{
      calcPrice.innerText = sum;
    }
  };

  size.addEventListener('change',calcForm);
  material.addEventListener('change',calcForm);
  options.addEventListener('change',calcForm);
  promocode.addEventListener('input',calcForm);


};

export default calc;