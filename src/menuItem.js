import './styles/style.css';
import json from './components/menu.json5';

export default function menuItem(name, description, price) {
  const menuGalleryDiv = document.createElement('div');
  menuGalleryDiv.setAttribute('class', 'menu-card');

  menuGalleryDiv.innerHTML = `
  <strong>${name}</strong>
  <hr>
  ${description}
  <br>
  $${price}
  `;

  return menuGalleryDiv;
}
