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

    cloneTemplateTitan.querySelector('.data-titan__button-teaser').id =
      item.src;

    fragment.appendChild(cloneTemplateTitan);
  }

  dataTitan.appendChild(fragment);

  const buttonVideoTitan = document.querySelectorAll(
    '.data-titan__button-teaser'
  );

  watchVideo(buttonVideoTitan);
}

const modal = document.querySelector('.modal');

const modalVideo = document.querySelector('.modal-video');

function watchVideo(video) {
  video.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.id) {
        modal.style.display = 'block';

        modalVideo.src = e.target.id;
      } else {
        console.log('Nega');
      }
    });
  });
}

const modalClose = document.querySelector('.modal-close');

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';

  modalVideo.src = '';
  console.log(modalVideo);
});

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

    fragment.appendChild(cloneTemplateCharacter);
  }

  dataCharacter.appendChild(fragment);
}

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
