const domElements = {
  templateTitans: document.getElementById('template-titans'),

  templateCharacters: document.getElementById('template-characters'),

  titansContainer: document.querySelector('.titans-container'),

  charactersContainer: document.querySelector('.characters-container'),

  fragment: document.createDocumentFragment(),

  buttonCharacters: document.getElementById('button-characters'),

  buttonTitans: document.getElementById('button-titans'),
};

const changeSection = () => {
  domElements.buttonTitans.classList.add('select');

  const coso =
    domElements.charactersContainer.querySelectorAll('.character-element');
  console.log(coso);

  domElements.buttonCharacters.addEventListener('click', () => {
    domElements.buttonTitans.classList.remove('select');

    domElements.buttonCharacters.classList.add('select');
  });

  domElements.buttonTitans.addEventListener('click', () => {
    domElements.buttonTitans.classList.add('select');

    domElements.buttonCharacters.classList.remove('select');
  });
};

changeSection();

const addCharactersDom = (characters) => {
  characters.forEach((item) => {
    const cloneTemplateCharacters =
      domElements.templateCharacters.content.cloneNode(true);

    let dataCharacters = item;

    cloneTemplateCharacters.querySelector('.character-image').src =
      dataCharacters.image;

    cloneTemplateCharacters.querySelector('.character-name').textContent =
      dataCharacters.name;

    cloneTemplateCharacters.querySelector(
      '.character-description'
    ).textContent = dataCharacters.description;

    domElements.fragment.appendChild(cloneTemplateCharacters);
  });

  domElements.charactersContainer.appendChild(domElements.fragment);
};

const addTitansDom = (titans) => {
  titans.forEach((item) => {
    const cloneTemplateTitans =
      domElements.templateTitans.content.cloneNode(true);
    let dataTitans = item;

    cloneTemplateTitans.querySelector('.titans-image').src = dataTitans.image;

    cloneTemplateTitans.querySelector('.titans-name').textContent =
      dataTitans.name;

    cloneTemplateTitans.querySelector('.titans-description').textContent =
      dataTitans.description;

    domElements.fragment.appendChild(cloneTemplateTitans);
  });

  domElements.titansContainer.appendChild(domElements.fragment);
};

const addTextButtonCharacters = (titleCharacters) => {
  domElements.buttonCharacters.textContent = titleCharacters;
};

const addTextButtonTitans = (titleTitans) => {
  domElements.buttonTitans.textContent = titleTitans;
};

const getTitansApi = async (titansApi) => {
  try {
    const response = await fetch(titansApi);
    const result = await response.json();

    const dataTitans = {
      title: result.title,
      titans: result.data,
    };

    addTextButtonTitans(dataTitans.title);

    addTitansDom(dataTitans.titans);
  } catch (error) {
    console.log(error);
  }
};

const getCharactersApi = async (charactersApi) => {
  try {
    const response = await fetch(charactersApi);
    const result = await response.json();

    const dataCharacters = {
      title: result.title,
      characters: result.data,
    };

    addTextButtonCharacters(dataCharacters.title);

    addCharactersDom(dataCharacters.characters);
  } catch (error) {
    console.log(error);
  }
};

const getDataApi = async () => {
  try {
    const response = await fetch('https://snk-player-api.vercel.app/');
    const result = await response.json();

    const data = {
      title: result.title,
      characters: result.data.characters,
      titans: result.data.titans,
    };

    getCharactersApi(data.characters);
    getTitansApi(data.titans);
  } catch (error) {
    console.log(error);
  }
};

getDataApi();
