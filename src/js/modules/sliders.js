const sliders = (sliders, dir, prew, next) => {
  const items = document.querySelectorAll(sliders);
  let slideIndex = 0;
  let paused;

  const showSlide = (index) => {
    if(index < 0){
      slideIndex = items.length - 1;
    }

    if( index > items.length - 1 ){
      slideIndex = 0;
    }

    items.forEach(item => {
      item.style.display = 'none';
      item.classList.add('animated');
    });

    items[slideIndex].style.display = 'block';
  };

  const changeSlide = (n) => {
    showSlide(slideIndex += n);
  };
 
  showSlide(slideIndex);

  const activateSlide = () =>{
    if(dir === 'vertical'){
      paused = setInterval(()=>{
        changeSlide(1);  
        items[slideIndex].classList.add('slideInDown');
      },6000);
    }else{
      paused = setInterval(()=>{
        changeSlide(1);
        items[slideIndex].classList.remove('slideInRight');
        items[slideIndex].classList.add('slideInLeft');
      },6000);
    }
  };

  activateSlide();

  items[0].parentElement.addEventListener('mouseover',()=>{
    clearInterval(paused);
   
  });

  items[0].parentElement.addEventListener('mouseout',()=>{
    activateSlide();
    document.body.style.overflowX = '';
  });

  if(prew && next){
    const prewBtn = document.querySelector(prew);
    const nextBtn = document.querySelector(next);

    prewBtn.addEventListener('click',()=>{
      changeSlide(-1);
      items[slideIndex].classList.add('slideInRight');
      items[slideIndex].classList.remove('slideInLeft');
      document.body.style.overflowX = 'hidden';
    });

    nextBtn.addEventListener('click',()=>{
      changeSlide(1);
      items[slideIndex].classList.add('slideInLeft');
      items[slideIndex].classList.remove('slideInRight');
    });
  }
};

export default sliders;