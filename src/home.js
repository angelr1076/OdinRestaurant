import './styles/style.css';

export default function loadHome() {
  const element = document.createElement('div');
  element.setAttribute('id', 'home');
  element.setAttribute('class', 'home-page flex-home');

  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'home-title brick-background');
  h1.textContent = `Smokin' meats since 2022`;
  h1.style.paddingTop = '1em';

  const aboutPara = document.createElement('p');
  aboutPara.setAttribute('class', 'about-para brick-background');
  aboutPara.textContent = `
    We're located in the heart of Pacific Beach near the Blockbuster Video that closed twenty years ago next to Fatburger that closed a decade ago.
  `;

  const hoursPara = document.createElement('p');
  hoursPara.setAttribute('class', 'hours-para brick-background');
  hoursPara.innerHTML = `
    <p><u>Restaurant hours</u></p>
    <p>Monday: closed</p>
    <p>Tuesday: 2pm - 8pm</p>
    <p>Wednesday: 2pm - 8pm</p>
    <p>Thursday: 2pm - 8pm</p>
    <p>Friday: 2pm - 8pm</p>
    <p>Saturday: 2pm - 8pm</p>
    <p>Sunday: closed</p>
  `;

  element.appendChild(h1);
  element.appendChild(aboutPara);
  element.appendChild(hoursPara);

  return element;
}
