import './styles/style.css';

export default function loadContact() {
  const element = document.createElement('div');
  element.setAttribute('id', 'contact');

  element.textContent = '<h1>Contact Page</h1>';

  return element;
}
