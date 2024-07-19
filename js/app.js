const titansContainer = document.querySelector('.titans-container');
const charactContainer = document.querySelector('.character-container');
const templateTitans = document.getElementById('template-titans');
const templateCharact = document.getElementById('template-characters');
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

    addTitanDom(data);
  } catch (error) {
    console.log(error);
  }
};

const addTitanDom = (arrTitan) => {
  console.log(arrTitan);
};

const getTitan = async (urlTitan) => {
  try {
    const resTitan = await fetch(urlTitan);

    const dataTitan = await resTitan.json();

    const { data } = await dataTitan;

    addCharactDom(data);
  } catch (error) {
    console.log(error);
  }
};

const addCharactDom = (arrTitan) => {
  console.log(arrTitan);
};
