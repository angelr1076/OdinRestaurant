import './styles/style.css';

export default function loadHome() {
  const element = document.createElement('div');
  element.setAttribute('id', 'homepage');

  element.textContent = '<h1>Home Page</h1>';

  return element;
}
