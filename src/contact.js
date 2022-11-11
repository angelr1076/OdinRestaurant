import './styles/style.css';
import locationImg from './images/locationImg.png';

export default function loadContact() {
  const element = document.createElement('div');
  element.setAttribute('id', 'contact');
  element.setAttribute('class', 'contact-page hidden');

  const container = document.createElement('div');
  container.setAttribute('class', 'contact-container');

  const colLeft = document.createElement('div');
  colLeft.setAttribute('class', 'col-left');
  const colRight = document.createElement('div');
  colRight.setAttribute('class', 'col-right');

  let locImg = new Image();
  locImg.src = locationImg;

  element.appendChild(container);
  container.appendChild(colLeft);
  container.appendChild(colRight);
  colRight.appendChild(locImg);

  colLeft.innerHTML = `
    <p><u>Phone:</u></p>
    <p><strong>858.555.5555</strong></p>
    <br>
    <br>
    <p><u>Address:</u></p> 
    <p><strong>930 Mission Blvd.</strong></p>
    <p><strong>San Diego, CA 92109</strong></p>
    <br>
    <p><u>Email:</u></p>
    <p><strong>brasmoke@beachlife</strong></p>

  `;

  return element;
}
