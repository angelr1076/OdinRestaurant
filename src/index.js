import './styles/style.css';
import navBar from './navbar';

function component() {
  // Create div with an ID of 'content'
  const element = document.createElement('div');
  element.setAttribute('id', 'content');
  element.setAttribute('class', 'content');

  element.appendChild(navBar());
  return element;
}

document.body.appendChild(component());
