import { postData } from '../services/requests';

const forms = () => {
  const form = document.querySelectorAll('form');
  const uploads = document.querySelectorAll('[data-upload]');
  const inputsUpload = document.querySelectorAll('[name="upload"]');

  const messages = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };

  const path = {
    designer:'https://jsonplaceholder.typicode.com/posts',
    question:'https://jsonplaceholder.typicode.com/posts'
  };

  const cleaningFileName = () => {
    uploads.forEach(item => {
      item.innerText = 'Файл не выбран';
    });
  };

  inputsUpload.forEach(input => {
    input.addEventListener('input',()=>{
      const file = input.files[0];
      const arr = file.name.split('.');      
      const dots = arr[0].length > 7 ? '...' : '.';
      const upload = input.parentElement.querySelector('[data-upload]');
      
      upload.innerText = `${arr[0].substring(0,6)}${dots}${arr[arr.length - 1]}`;
    });
  });

  form.forEach(item => {
    item.addEventListener('submit',(event)=> {
      event.preventDefault();

      const statusMessages = document.createElement('div');
      const statusImg = document.createElement('img');
      const statusText = document.createElement('div');

      statusImg.setAttribute('src',messages.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      
      statusText.classList.add('animated', 'fadeInUp');
      statusText.innerText = messages.loading;

      statusMessages.classList.add('status');
      statusMessages.append(statusImg,statusText);

      item.classList.add('animated', 'fadeOutUp');
      item.parentElement.appendChild(statusMessages);
      setTimeout(()=>{
        item.style.display = 'none';
      },400);
      

      const data = Object.fromEntries(new FormData(item).entries());

      const api = data?.upload ? path.designer : path.question;

      postData(api,data)
        .then(() => {
          statusImg.setAttribute('src',messages.ok);
          statusText.innerText = messages.success;
        })
        .catch(()=> {
          statusImg.setAttribute('src',messages.fail);
          statusText.innerText = messages.failure;
        })
        .finally(()=>{
          setTimeout(()=>{
            cleaningFileName();
            item.reset();
            statusMessages.remove();
            item.style.display = 'block';
            item.classList.remove('fadeOutUp');
            item.classList.add('fadeInUp');
          },3000);
        });
    });
  });
};

export default forms;