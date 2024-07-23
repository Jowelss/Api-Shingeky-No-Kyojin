const titansContainer = document.querySelector('.titan-container');
const charactContainer = document.querySelector('.character-container');
const templateTitan = document.getElementById('template-titan');
const templateCharacter = document.getElementById('template-character');

const buttonTitan = document.getElementById('button-titan');
const buttonCharacter = document.getElementById('button-character');

const fragment = document.createDocumentFragment();

const getData = async () => {
  try {
    const response = await fetch('https://snk-player-api.vercel.app/');

    const result = await response.json();

    const { data } = result;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getApis = async () => {
  try {
    const functPromise = await getData();

    const { characters, titans } = await functPromise;

    await Promise.all([getCharact(characters), getTitan(titans)]);
  } catch (error) {
    console.log(error);
  }
};

getApis();

const getCharact = async (urlCharact) => {
  try {
    const resCharact = await fetch(urlCharact);

    const dataCharact = await resCharact.json();

    const { data } = await dataCharact;

    addCharactDom(data);
  } catch (error) {
    console.log(error);
  }
};

const addCharactDom = (arrCharact) => {
  for (const dataCharact of arrCharact) {
    const cloneTemplate = templateCharacter.content.cloneNode(true);

    const listLabels = {
      name: cloneTemplate.querySelector('.character-name'),
      description: cloneTemplate.querySelector('.character-description'),
      status: cloneTemplate.querySelector('.character-status'),
      image: cloneTemplate.querySelector('.character-image'),
    };

    listLabels.name.textContent = dataCharact.name;

    listLabels.description.textContent = dataCharact.description;

    listLabels.status.textContent = dataCharact.status;

    listLabels.image.src = dataCharact.image;

    fragment.appendChild(cloneTemplate);
  }
  charactContainer.appendChild(fragment);
};

const getTitan = async (urlTitan) => {
  try {
    const resTitan = await fetch(urlTitan);

    const dataTitan = await resTitan.json();

    const { data } = await dataTitan;

    addTitanDom(data);
  } catch (error) {
    console.log(error);
  }
};

const addTitanDom = (arrTitan) => {
  for (const dataTitan of arrTitan) {
    const cloneTemplate = templateTitan.content.cloneNode(true);

    const listLabels = {
      name: cloneTemplate.querySelector('.titan-name'),
      description: cloneTemplate.querySelector('.titan-description'),
      height: cloneTemplate.querySelector('.titan-height'),
      image: cloneTemplate.querySelector('.titan-image'),
    };

    listLabels.name.textContent = dataTitan.name;

    listLabels.description.textContent = dataTitan.description;

    listLabels.height.textContent = dataTitan.height;

    listLabels.image.src = dataTitan.image;

    fragment.appendChild(cloneTemplate);
  }

  titansContainer.appendChild(fragment);
};
