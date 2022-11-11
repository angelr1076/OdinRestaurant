import './styles/style.css';

export default function navBar() {
  // Divs and navbar containers
  const header = document.createElement('header');
  const brandDiv = document.createElement('div');
  const navBarEl = document.createElement('nav');
  const navLabel = document.createElement('label');
  const navCheckbox = document.createElement('input');
  const hamItems = document.createElement('div');

  // Buttons
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');
  const brand = document.createElement('button');
  brand.setAttribute('class', 'brand-btn');

  // Button labels
  brand.innerText = "Smokin' Meats | Brasserie";
  homeBtn.innerText = 'Home';
  menuBtn.innerText = 'Menu';
  contactBtn.innerText = 'Contact';
  navLabel.innerHTML = '&#9776';

  // Add IDs and classes
  homeBtn.setAttribute('id', 'homeButton');
  menuBtn.setAttribute('id', 'menuButton');
  contactBtn.setAttribute('id', 'contactButton');
  navCheckbox.setAttribute('id', 'hamburger');
  hamItems.setAttribute('class', 'hamitems');
  homeBtn.setAttribute('class', 'btn');
  menuBtn.setAttribute('class', 'btn');
  contactBtn.setAttribute('class', 'btn');
  header.setAttribute('class', 'header font-outline');
  brandDiv.setAttribute('class', 'brand');
  navBarEl.setAttribute('class', 'hamnav');
  navLabel.setAttribute('for', 'hamburger');
  navCheckbox.setAttribute('type', 'checkbox');

  // Append to brand class container
  brandDiv.appendChild(navBarEl);
  brandDiv.appendChild(brand);

  // Append to navbar container
  navBarEl.appendChild(navLabel);
  navBarEl.appendChild(navCheckbox);
  navBarEl.appendChild(hamItems);
  hamItems.appendChild(homeBtn);
  hamItems.appendChild(menuBtn);
  hamItems.appendChild(contactBtn);

  // Append all to header container
  header.appendChild(brandDiv);
  header.appendChild(navBarEl);

  return header;
}
