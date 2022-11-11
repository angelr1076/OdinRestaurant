import './styles/style.css';

export default function navBar() {
  // Divs and navbar containers
  const header = document.createElement('header');
  const brandDiv = document.createElement('div');
  const navBarEl = document.createElement('nav');

  // Buttons
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');
  const brand = document.createElement('button');

  // Button labels
  brand.innerText = "Smokin' Meats | Brasserie";
  homeBtn.innerText = 'Home';
  menuBtn.innerText = 'Menu';
  contactBtn.innerText = 'Contact';

  // Add IDs and classes
  homeBtn.setAttribute('id', 'homeButton');
  menuBtn.setAttribute('id', 'menuButton');
  contactBtn.setAttribute('id', 'contactButton');
  homeBtn.setAttribute('class', 'btn');
  menuBtn.setAttribute('class', 'btn');
  contactBtn.setAttribute('class', 'btn');
  header.setAttribute('class', 'header font-outline');
  brandDiv.setAttribute('class', 'brand');
  navBarEl.setAttribute('class', 'navbar');

  // Append to brand class container
  brandDiv.appendChild(navBarEl);
  brandDiv.appendChild(brand);

  // Append to navbar container
  navBarEl.appendChild(homeBtn);
  navBarEl.appendChild(menuBtn);
  navBarEl.appendChild(contactBtn);

  // Append all to header container
  header.appendChild(brandDiv);
  header.appendChild(navBarEl);

  return header;
}
