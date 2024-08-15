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

function addTitanDom(titans) {
  for (const item of titans) {
    let cloneTemplateTitan = templateTitan.content.cloneNode(true);

    cloneTemplateTitan.querySelector('.data-image__titan').src = item.image;

    cloneTemplateTitan.querySelector('.data-titan__name').textContent =
      item.name;

    cloneTemplateTitan.querySelector('.data-titan__description').textContent =
      item.description;

    fragment.appendChild(cloneTemplateTitan);
  }

  dataTitan.appendChild(fragment);
}

const templateCharacter = document.getElementById('template-character');

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

    cloneTemplateCharacter.querySelector('.video-character').src = item.src;

    fragment.appendChild(cloneTemplateCharacter);
  }

  dataCharacter.appendChild(fragment);
}

const videoButtonTitan = document.querySelector('.data-titan__button-teaser');

const videoContent = document.getElementById('video');

// function playVideoTitan() {
//   videoContent.src = '';
// }

// videoButtonTitan.addEventListener('click', playVideoTitan);

function changeTitan() {
  if ((dataTitan.style.opacity = '1')) {
    console.log('Elemento ya seleccionado');
    dataCharacter.style.opacity = '0';
  } else {
    dataTitan.style.opacity = '1';

    dataCharacter.style.opacity = '0';
  }
}

function changeCharacter() {
  if ((dataCharacter.style.opacity = '1')) {
    console.log('Elemento ya seleccionado');
    dataTitan.style.opacity = '0';
  } else {
    dataCharacter.style.opacity = '1';

    dataTitan.style.opacity = '0';
  }
}

buttonCharacter.addEventListener('click', changeCharacter);
buttonTitan.addEventListener('click', changeTitan);
