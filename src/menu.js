import './styles/style.css';

export default function loadMenu() {
  const element = document.createElement('div');
  element.setAttribute('id', 'menu');
  element.setAttribute('class', 'menu-page hidden');

  element.textContent = 'Menu Page';

  return element;
}
