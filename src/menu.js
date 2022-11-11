import './styles/style.css';
import json from './components/menu.json5';
import menuItem from './menuItem';
import turkeyImg from './images/smokedTurkeyLeg.png';
import poBoyImg from './images/poboy.jpeg';
import duckSliderImg from './images/duckslider.jpeg';
import smokeImg from './images/smokeandmirrors.jpeg';
import cubanImg from './images/smokedcuban.jpeg';
import tacosImg from './images/southtacs.jpeg';

export default function loadMenu() {
  const element = document.createElement('div');
  element.setAttribute('id', 'menu');
  element.setAttribute('class', 'menu-page hidden');

  let turkeyLegIcon = new Image();
  turkeyLegIcon.src = turkeyImg;
  let poBoyIcon = new Image();
  poBoyIcon.src = poBoyImg;
  let duckSlidIcon = new Image();
  duckSlidIcon.src = duckSliderImg;
  let smokeMirIcon = new Image();
  smokeMirIcon.src = smokeImg;
  let cubanIcon = new Image();
  cubanIcon.src = cubanImg;
  let tacosIcon = new Image();
  tacosIcon.src = tacosImg;

  const menuItem1 = menuItem(
    json.menuItem.name,
    json.menuItem.description,
    json.menuItem.price,
  );

  const menuItem2 = menuItem(
    json.menuItem2.name,
    json.menuItem2.description,
    json.menuItem2.price,
  );

  const menuItem3 = menuItem(
    json.menuItem3.name,
    json.menuItem3.description,
    json.menuItem3.price,
  );

  const menuItem4 = menuItem(
    json.menuItem4.name,
    json.menuItem4.description,
    json.menuItem4.price,
  );

  const menuItem5 = menuItem(
    json.menuItem5.name,
    json.menuItem5.description,
    json.menuItem5.price,
  );
  const menuItem6 = menuItem(
    json.menuItem6.name,
    json.menuItem6.description,
    json.menuItem6.price,
  );

  element.appendChild(menuItem1);
  element.appendChild(menuItem2);
  element.appendChild(menuItem3);
  element.appendChild(menuItem4);
  element.appendChild(menuItem5);
  element.appendChild(menuItem6);
  menuItem1.appendChild(turkeyLegIcon);
  menuItem2.appendChild(poBoyIcon);
  menuItem3.appendChild(duckSlidIcon);
  menuItem4.appendChild(smokeMirIcon);
  menuItem5.appendChild(cubanIcon);
  menuItem6.appendChild(tacosIcon);

  return element;
}
