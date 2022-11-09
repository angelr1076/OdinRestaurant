import navBar from './navbar';
// import { showHidePages } from './navbar';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

export default function pageLoad() {
  const element = document.createElement('div');
  element.appendChild(navBar());
  element.appendChild(loadHome());
  element.appendChild(loadMenu());
  element.appendChild(loadContact());

  return element;
}
