import './styles/style.css';
import pageLoad from './pageLoad';
import showElement from './showEl';
import hideElement from './hideEl';

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

  btns.forEach(btn => {
    let buttonEl = { btn };
    let btnId = buttonEl.btn.id;

    btn.addEventListener('click', () => {
      const homeDiv = document.querySelector('#home');
      const menuDiv = document.querySelector('#menu');
      const contactDiv = document.querySelector('#contact');

      if (btnId === 'homeButton') {
        showElement(homeDiv);
        hideElement(menuDiv);
        hideElement(contactDiv);
      } else if (btnId === 'menuButton') {
        showElement(menuDiv);
        hideElement(homeDiv);
        hideElement(contactDiv);
      } else if (btnId === 'contactButton') {
        showElement(contactDiv);
        hideElement(homeDiv);
        hideElement(menuDiv);
      }
    });
  });
})();
