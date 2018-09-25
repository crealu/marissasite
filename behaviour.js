function toggleNavList() {
  let navList = document.getElementById('nav-list-container');
  if (!(navList.style.left === '0px')) {
    navList.style.left = '0px';
  } else {
      navList.style.left = '110px';
  }
}

function clearContent(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function displayContentsMain(titleCase) {
  let titleHere = document.getElementById('gets-title');
  let detailsHere = document.getElementById('gets-details');
  titleHere.style.opacity = '0';
  detailsHere.style.opacity = '0';

  clearContent(titleHere);
  clearContent(detailsHere);

  let title = document.createElement("h2");
  let details = document.createElement("p");

  let titleText = document.createTextNode(titleCase);
  var dT, detailsText;

  switch (titleCase) {
    case 'About':
      dT = "(About Marissa here)";
      detailsText = document.createTextNode(dT);
      break;

    case 'My Work':
      dT = "(My Work here)";
      detailsText = document.createTextNode(dT);
      title.classList.add('software-title');
      break;

    case 'Schedule':
      dT = "(My current schedule)";
      detailsText = document.createTextNode(dT);
      title.classList.add('software-title');
      break;

    case 'Contact':
      dT = "(How to contact me)";
      detailsText = document.createTextNode(dT);
      break;
  }

  title.classList.add('current-title');
  title.appendChild(titleText);
  titleHere.appendChild(title);
  details.appendChild(detailsText);
  detailsHere.appendChild(details);

  return([titleHere, detailsHere]);
}

function displayAbout() {
  let mainArray = displayContentsMain('About');
  mainArray;

  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function displayMyWork() {
  let mainArray = displayContentsMain('My Work');
  mainArray;

  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function displaySchedule() {
  let mainArray = displayContentsMain('Schedule');
  mainArray;

  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function displayContact() {
  let mainArray = displayContentsMain('Contact');
  mainArray;

  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function changeElement(el, aClicked) {
  let body = document.body;
  let bg;
  var centerImg = document.getElementsByClassName('center-ele')[0];
  var centerImgAlt = centerImg.alt;
  var centerImgSrc = centerImg.src;
  var outerImg = aClicked.firstChild.nextSibling;
  var outerImgAlt = outerImg.alt;
  var outerImgSrc = outerImg.src;
  var newCenterImg, newOuterImg;
  switch (el) {
    case 'fire':
      bg = 'var(--fire-bg)';
      newCenterImg = 'fires.png';
      centerImg.alt = outerImgAlt;
      loadFire();
      break;
    case 'water':
      bg = 'var(--water-bg)';
      newCenterImg = 'waters.png';
      centerImg.alt = outerImgAlt;
      loadWater();
      break;
    case 'earth':
      bg = 'var(--earth-bg)';
      newCenterImg = 'earths.png';
      centerImg.alt = outerImgAlt;
      loadEarth();
      break;
    case 'air':
      bg = 'var(--air-bg)';
      newCenterImg = 'airs.png';
      centerImg.alt = outerImgAlt;
      loadAir();
      break;
  }

  // set new center
  centerImg.src = 'img/' + newCenterImg;
  centerImg.alt = outerImgAlt;

  // set new outer
  var concatenated = 'img/'.concat(centerImgAlt, 's.png');
  var re = new RegExp(concatenated, 'g');
  outerImg.src = centerImgSrc.match(re)[0];
  outerImg.alt = centerImgAlt;

  // set new background
  body.style.background = "" + bg + " no-repeat center center fixed";
  body.style.backgroundSize = "cover";

  // set new a function parameter
  aClicked.setAttribute("onclick", "changeElement('" + centerImgAlt + "', this)");
}

function displayElementContents(element) {
  let titleHere = document.getElementById('gets-el-title');
  let detailsHere = document.getElementById('gets-el-info');
  titleHere.style.opacity = '0';
  detailsHere.style.opacity = '0';

  clearContent(titleHere);
  clearContent(detailsHere);

  let title = document.createElement("h2");
  let details = document.createElement("p");

  let titleText = document.createTextNode(element);
  var dT, detailsText;

  switch (element) {
    case 'Fire':
      dT = "Fire info";
      detailsText = document.createTextNode(dT);
      break;

    case 'Water':
      dT = "Water info";
      detailsText = document.createTextNode(dT);
      title.classList.add('software-title');
      break;

    case 'Air':
      dT = "Air info";
      detailsText = document.createTextNode(dT);
      title.classList.add('software-title');
      break;

    case 'Earth':
      dT = "Earth info";
      detailsText = document.createTextNode(dT);
      break;
  }

  title.classList.add('current-title');
  title.appendChild(titleText);
  titleHere.appendChild(title);
  details.appendChild(detailsText);
  detailsHere.appendChild(details);

  return([titleHere, detailsHere]);
}

function loadFire() {
  let mainArray = displayElementContents('Fire');
  mainArray;
  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function loadWater() {
  let mainArray = displayElementContents('Water');
  mainArray;
  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function loadAir() {
  let mainArray = displayElementContents('Air');
  mainArray;
  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function loadEarth() {
  let mainArray = displayElementContents('Earth');
  mainArray;
  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function testDelay(iEnd, func) {
  let i = 0;
  let id = setInterval(frame, 1000);
  function frame() {
    i++;
    console.log(i);
    if (i === iEnd) {
      clearInterval(id);
      func;
    }
  }
}

// got this from logging curr.firstChild (useful for getting element props)
// curr.firstChild.nextSibling.src = oldCenterImg;
