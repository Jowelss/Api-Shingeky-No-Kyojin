const buttonTitan = document.querySelector('.button-titan');
const buttonCharacter = document.querySelector('.button-character');

const dataTitan = document.querySelector('.data-titan__container');
const dataCharacter = document.querySelector('.data-character__container');

async function getdata() {
  try {
    const response = await fetch('https://snk-player-api.vercel.app/');
    const result = await response.json();

    const data = await result.data;

    getDataTitan(data.titans);
    getDataCharacter(data.characters);
  } catch (error) {
    console.log(error);
  }
}

async function getDataTitan(dataTitan) {
  try {
    const response = await fetch(dataTitan);
    const result = await response.json();

    const titans = result.data;

    return await titans;
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
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Lograr que el llamado a la funcion me devuelva los datos

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
