const buttonTitan = document.querySelector('.button-titan');
const buttonCharacter = document.querySelector('.button-character');

const dataTitan = document.querySelector('.data-titan__container');
const dataCharacter = document.querySelector('.data-character__container');

async function getdata() {
  try {
    const response = await fetch('https://snk-player-api.vercel.app/');
    const result = await response.json();

    const data = await result.data;

    const titans = await getDataTitan(data.titans);
    const characters = await getDataCharacter(data.characters);

    // return data titans and character in fuction getData()
    return {
      titans,
      characters,
    };
  } catch (error) {
    console.log(error);
  }
}

async function getDataTitan(dataTitan) {
  try {
    const response = await fetch(dataTitan);
    const result = await response.json();

    const titans = result.data;

    return titans;
  } catch (error) {
    console.log(error);
  }
}

async function getDataCharacter(dataCharacter) {
  try {
    const response = await fetch(dataCharacter);
    const result = await response.json();

    const characters = result.data;

    return characters;
  } catch (error) {
    console.log(error);
  }
}

// Get fuctions promises titans and character
getdata()
  .then((data) => {
    addTitanDom(data.titans);
    addCharacterDom(data.characters);
  })
  .catch((err) => {
    console.log(err);
  });

const fragment = document.createDocumentFragment();

const templateTitan = document.getElementById('template-titan');

// fuction add data of titans to DOM
function addTitanDom(titans) {
  for (const item of titans) {
    let cloneTemplateTitan = templateTitan.content.cloneNode(true);

    cloneTemplateTitan.querySelector('.data-image__titan').src = item.image;

    cloneTemplateTitan.querySelector('.data-titan__name').textContent =
      item.name;

    cloneTemplateTitan.querySelector('.data-titan__description').textContent =
      item.description;

    cloneTemplateTitan.querySelector('.data-titan__button-teaser').id =
      item.src;

    fragment.appendChild(cloneTemplateTitan);
  }

  dataTitan.appendChild(fragment);

  const buttonVideoTitan = document.querySelectorAll(
    '.data-titan__button-teaser'
  );

  watchVideoTitan(buttonVideoTitan);
}

const templateCharacter = document.getElementById('template-character');

// fuction add data of characters to DOM
function addCharacterDom(character) {
  for (const item of character) {
    let cloneTemplateCharacter = templateCharacter.content.cloneNode(true);

    cloneTemplateCharacter.querySelector('.data-image__character').src =
      item.image;

    cloneTemplateCharacter.querySelector('.data-character__name').textContent =
      item.name;

    cloneTemplateCharacter.querySelector(
      '.data-character__description'
    ).textContent = item.description;

    cloneTemplateCharacter.querySelector(
      '.data-character__status'
    ).textContent = item.status;

    cloneTemplateCharacter
      //Add status to label status-icon
      .querySelector('.data-character__status-icon').id = item.status;

    cloneTemplateCharacter.querySelector('.data-character__button-teaser').id =
      item.src;

    fragment.appendChild(cloneTemplateCharacter);
  }

  dataCharacter.appendChild(fragment);

  const buttonVideoCharacter = document.querySelectorAll(
    '.data-character__button-teaser'
  );

  watchVideoCharacter(buttonVideoCharacter);
  addStateCharacter(dataCharacter); //fuction calling dataCharacter for add status dom
}

function addStateCharacter() {
  const statusIcon = dataCharacter.querySelectorAll(
    '.data-character__status-icon'
  );

  statusIcon.forEach((element) => {
    if (element.id === 'Alive') {
      element.style.backgroundColor = '#1d6e1b';
    } else if (element.id === 'Dead') {
      element.style.backgroundColor = '#911414';
    }
  });
}

const modalContainer = document.querySelector('.modal-container');
const modalVideo = document.querySelector('.modal-video');

// fuctions for added videos to modal and open it with button (buttonVideoCharacter and buttonVideoTitan)
function watchVideoTitan(video) {
  video.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.id) {
        modalContainer.style.display = 'block';
        console.log(e.target.id);
        modalVideo.src = e.target.id;
      } else {
        console.log('Awxo');
      }
    });
  });
}

function watchVideoCharacter(video) {
  video.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.id) {
        modalContainer.style.display = 'block';

        modalVideo.src = e.target.id;
      } else {
        console.log('Nega');
      }
    });
  });
}

// fuction to closed modal when clicking to button
const modalClose = document.querySelector('.modal-close');

function closeModalbutton() {
  modalContainer.style.display = 'none';

  modalVideo.src = '';
}

modalClose.addEventListener('click', closeModalbutton);

// fuction to closed modal when clicking outside the modal
function modalCloseOutside(event) {
  if (event === modalContainer) {
    modalContainer.style.display = 'none';
  }
}

window.addEventListener('click', (e) => {
  modalCloseOutside(e.target);
});

// two fuctions for change de sections (titans to characters)
function changeTitan() {
  if ((dataCharacter.style.zIndex = '1')) {
    dataCharacter.style.zIndex = '-1';
    dataCharacter.style.display = 'none';

    dataTitan.style.display = 'flex';
  }
}

function changeCharacter() {
  if ((dataCharacter.style.zIndex = '-1')) {
    dataCharacter.style.zIndex = '1';
    dataCharacter.style.display = 'flex';

    dataTitan.style.display = 'none';
  }
}

buttonCharacter.addEventListener('click', changeCharacter);
buttonTitan.addEventListener('click', changeTitan);
