import './styles/style.css';

export default function loadHome() {
  const element = document.createElement('div');
  element.setAttribute('id', 'home');
  element.setAttribute('class', 'home-page');

  element.textContent = 'Home Page';

  return element;
}
