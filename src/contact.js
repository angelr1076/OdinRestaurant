import './styles/style.css';

export default function loadContact() {
  const element = document.createElement('div');
  element.setAttribute('id', 'contact');
  element.setAttribute('class', 'contact-page hidden');

  element.textContent = 'Contact Page';

  return element;
}
