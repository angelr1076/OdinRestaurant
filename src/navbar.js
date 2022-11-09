import './styles/style.css';
import loadHome from './home';

export default function navBar() {
  const header = document.createElement('header');
  const brandDiv = document.createElement('div');

  const navBarEl = document.createElement('nav');

  const navList = document.createElement('ul');
  const homeLi = document.createElement('li');
  const menuLi = document.createElement('li');
  const contactLi = document.createElement('li');

  const brandEl = document.createElement('a');
  const homeNavEl = document.createElement('a');
  const menuNavEl = document.createElement('a');
  const contactNavEl = document.createElement('a');

  // homeNavEl.href = loadHome();

  brandDiv.setAttribute('class', 'brand');
  navBarEl.setAttribute('class', 'navbar');

  brandEl.innerText = "Smokin' Meats | Brasserie";
  homeNavEl.innerText = 'Home';
  menuNavEl.innerText = 'Menu';
  contactNavEl.innerText = 'Contact';

  homeLi.appendChild(homeNavEl);
  menuLi.appendChild(menuNavEl);
  contactLi.appendChild(contactNavEl);

  brandDiv.appendChild(brandEl);
  navList.appendChild(homeLi);
  navList.appendChild(menuLi);
  navList.appendChild(contactLi);
  navBarEl.appendChild(navList);

  header.appendChild(brandDiv);
  header.appendChild(navBarEl);

  return header;
}
