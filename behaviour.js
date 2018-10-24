function toggleNavList() {
  let navList = document.getElementById('nav-list-container');
  if (!(navList.style.left === '0px')) {
    navList.style.left = '0px';
    navList.style.display = 'block';
    navList.style.opacity = '1';
  } else {
      navList.style.left = '110px';
      navList.style.display = 'none';
      navList.style.opacity = '0';
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
      dT = "Marissa is a Certified Holistic Wellness Practitioner, Holistic Nutrition Specialist, Transformational Wellness Coach, Guided Mediation Facilitator, and Certified Yoga Instructor. She specializes in weight loss, stress management and supplements. Her work is based off the ancient medical system rooted in India- Ayurveda. Ayurveda is a science backed, effective Holistic medical system that has been used for over 5 thousand years. Marissa's experience with Ayurveda has been life changing. Using the wisdom of Ayurveda, Marissa has overcame an anxiety and panic disorder, low immunity and other health conditions caused by excess inflammation in the body. She has increased her mental capacity by utilizing herbs and Ayurvedic practices for the brain. She is ready to share these ancient wellness solutions with the world!";
      detailsText = document.createTextNode(dT);
      break;

    case 'My Work':
      dT = "Please note that every service I offer is completely customized.";
      detailsText = document.createTextNode(dT);
      title.classList.add('software-title');
      break;

    case 'Schedule':
      dT = "To schedule a one on one assessment, please leave your email in the space provided. I will contact you within 24 hours to schedule a session.";
      detailsText = document.createTextNode(dT);
      title.classList.add('software-title');
      break;

    case 'Contact':
      dT = "Reach out to share a wellness goal.";
      detailsText = document.createTextNode(dT);
      break;

    case 'Resources':
      dT = "Saveable list Here";
      detailsText = document.createTextNode(dT);
      break;
  }

  title.classList.add('current-title');
  title.appendChild(titleText);
  titleHere.appendChild(title);
  details.appendChild(detailsText);
  detailsHere.appendChild(details);
  let infoLeft = document.getElementsByClassName('info-left')[0];
  let circleContainer = document.getElementsByClassName('circle-container')[0];
  let docBody = document.body;
  let docBodyWidth = getStyleValue(docBody, 'width');
  let cleanDBW = parseInt(docBodyWidth.replace('px', ""));
  if (cleanDBW >= 900) {
    infoLeft.style.width = '35%';
    circleContainer.style.transform = 'scale(0.75)';
    console.log(cleanDBW);
  } else if (cleanDBW <= 900 && cleanDBW >= 400) {
    infoLeft.style.width = '100%';
    circleContainer.style.transform = 'scale(0.5)';
  }

  return([titleHere, detailsHere]);
}

function displayAbout() {
  let mainArray = displayContentsMain('About');
  mainArray;

  //let check = 'Check out her <a href="https://www.youtube.com/channel/UCG47NLyWHWd9j31EmQupCVQ?view_as=subscriber" target="_blank">Youtube channel</a> to learn more about Ayurveda';

  //mainArray[1].innerHTML += (check);

  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function displayMyWork() {
  let mainArray = displayContentsMain('My Work');
  mainArray;

  let content = workContent();
  let i = 0;
  while (i < content.length) {
    mainArray[1].appendChild(content[i]);
    i++;
  }

  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function displaySchedule() {
  let mainArray = displayContentsMain('Schedule');
  mainArray;

  //let content = scheduleContent();
  //mainArray[1].appendChild(content);

  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function displayContact() {
  let mainArray = displayContentsMain('Contact');
  mainArray;

  let content = contactContent();
  mainArray[1].appendChild(content);

  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function displayResources() {
  let mainArray = displayContentsMain('Resources');
  mainArray;

  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}

function workContent() {
  function workTab(titleT, paraT) {
    this.title = document.createElement("h4");
    this.tText = document.createTextNode(titleT);
    this.para = document.createElement("p");
    this.pText = document.createTextNode(paraT);
    this.div = document.createElement("div");
  }

  var myWorkTabs = [
    ['Assessment', "Discover your body type! Let's figure out which areas of wellness and lifestyle need the most attention. This assessment will give you a clear outline of your current state of wellbeing. The Ancients believed that every bodily system is interconnected, meaning if one is out of balance, there's likely an imbalance in another system. Together, with the knowledge of the Ancients, we can determine the current state of wellness and begin with small action steps that promote complete balance. Don't worry though, the path to balance is gentle."],
    ['Customized Weight Protocol', "Weight loss is not only running on the treadmill or counting calories. Utilize my weight loss protocol and discover the delicious foods that could assist in weight loss and an improved metabolism. This protocol comes with a meal plan, recipe support, weekly coaching, and a full day's routine to promote weight loss. *please ask about fitness support*"],
    ['Customized Meal Plan', 'This meal plan goes hand in hand with the outcome of your assessment. Upon determining your body type and current state, I will take another assessment on your food preferences and build you a customized plan based on your goals (weight loss, increased energy, low sugar, etc). This comes with the meal plan, grocery shopping and recipe support.'],
    ['Customized Supplement Plan', 'Each customized supplement plan comes with an assessment and the top 10 supplements I believe could assist you with your goals and support with choosing which brands are best.'],
    ['Customized Guided Meditation', 'After a short assessment, I will formulate a guided meditation that will assist with your desired goals. Mediation can be used to achieve specific goals, re-program our "automatic" thoughts, reduce stress, clear the mind, or just simply relax.']
  ];

  var allWorkTabs = [];

  for (var i = 0; i < myWorkTabs.length; i ++) {
    let tabName = new workTab(myWorkTabs[i][0], myWorkTabs[i][1]);

    tabName.title.classList.add("my-work-c-title");
    tabName.title.appendChild(tabName.tText);
    tabName.title.setAttribute("onclick", "expandWorkContent( " + i + ")");

    tabName.para.classList.add("my-work-c-para");
    tabName.para.appendChild(tabName.pText);

    tabName.div.classList.add("my-work-c-div");
    tabName.div.appendChild(tabName.title);
    tabName.div.appendChild(tabName.para);


    allWorkTabs.push(tabName.div);
  }

  return(allWorkTabs);
}

function expandWorkContent(t) {
  let container = document.getElementsByClassName('my-work-c-div')[t];
  let style = getComputedStyle(container);
  let cHeight = style.getPropertyValue('height');
  let para = document.getElementsByClassName('my-work-c-para')[t];
  let newH = getStyleValue(para, 'height');
  if (cHeight == '280px') {
    container.style.height = 'calc(30px + 10px)';
    setTimeout(function(){ para.style.display = 'none'; }, 250);
    setTimeout(function(){ para.style.opacity = '0'; }, 0);
  } else {
    setTimeout(function(){ para.style.display = 'block'; }, 250);
    container.style.height = '280px';
    setTimeout(function(){ para.style.opacity = '1'; }, 300);
  }
}

function getStyleValue(ele, style) {
  let el = getComputedStyle(ele).getPropertyValue(style);
  return el;
}

function scheduleContent() {
  let cont = document.createElement("div");
  let para = document.createElement("p");
  let pText = document.createTextNode("To schedule a one on one assessment, please leave your email in the space provided. I will contact you within 24 hours to schedule a session.");
  para.appendChild(pText);
  cont.appendChild(para);
  return(cont);
}

function contactContent() {
  let nameInp = document.createElement("input");
  let emailInp = document.createElement("input");
  let cityInp = document.createElement("input");
  let textBox = document.createElement("textarea");
  let contactForm = document.createElement("div");
  let formUL = document.createElement("ul");
  formUL.setAttribute("id", "contact-ul");

  let inputs = [nameInp, emailInp, cityInp, textBox];

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.add('contact-input');
    let placeholder;
    switch(i) {
      case 0:
        placeholder = 'Name';
        break;
      case 1:
        placeholder = 'Email';
        break;
      case 2:
        placeholder = 'City';
        break;
      case 3:
        placeholder = 'Wellness Goal';
        break;
    }
    inputs[i].setAttribute("placeholder", placeholder);
    let formLI = document.createElement("li");
    formLI.classList.add('contact-li');

    formLI.appendChild(inputs[i]);
    formUL.appendChild(formLI);
    contactForm.appendChild(formUL);
  }
  return(contactForm);
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
      //bg = 'var(--fire-bg)';
      bg = 'radial-gradient(rgb(255, 240, 93), rgb(255, 93, 70))';
      newCenterImg = 'fires.png';
      centerImg.alt = outerImgAlt;
      loadFire();
      break;
    case 'water':
      //bg = 'var(--water-bg)';
      bg = 'radial-gradient(rgb(0, 184, 233), rgb(8, 0, 191))';
      newCenterImg = 'waters.png';
      centerImg.alt = outerImgAlt;
      loadWater();
      break;
    case 'earth':
      //bg = 'var(--earth-bg)';
      bg = 'radial-gradient(rgb(82, 233, 0), rgb(0, 120, 5))';
      newCenterImg = 'earths.png';
      centerImg.alt = outerImgAlt;
      loadEarth();
      break;
    case 'air':
      //bg = 'var(--air-bg)';
      bg = 'radial-gradient(rgb(255, 120, 220), rgb(152, 0, 156))';
      newCenterImg = 'airs.png';
      centerImg.alt = outerImgAlt;
      loadAir();
      break;
    case 'space':
      //bg = 'var(--space-bg)';
      bg = 'radial-gradient(rgb(107, 90, 121), rgb(36, 25, 45))';
      newCenterImg = 'spaces.png';
      centerImg.alt = outerImgAlt;
      loadSpace();
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

    case 'Space':
      dT = "Space info";
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

function loadSpace() {
  let mainArray = displayElementContents('Space');
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
