import './styles/style.css';
import pageLoad from './pageLoad';

function component() {
  // Create div with an ID of 'content'
  const element = document.createElement('div');
  element.setAttribute('id', 'content');
  element.setAttribute('class', 'content');
  element.appendChild(pageLoad());

  return element;
}

document.body.appendChild(component());

(function controlNavbar() {
  const btns = document.querySelectorAll('.btn');

  btns.forEach((btn, idx) => {
    let btnItem = { btn, idx };
    let btnId = btnItem.btn.id;

    btn.addEventListener('click', () => {
      if (btnId === 'menuButton') {
        const menuBtn = document.querySelector('#menu');
        menuBtn.classList.remove('hidden');
      } else if (btnId === 'contactButton') {
        const contactBtn = document.querySelector('#contact');
        contactBtn.classList.remove('hidden');
      } else {
      }
    });
  });
})();
