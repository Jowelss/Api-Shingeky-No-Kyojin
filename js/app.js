const getTitansApi = async (titansApi) => {
  try {
    const response = await fetch(titansApi);
    const result = await response.json();

    const dataTitans = {
      title: result.title,
      titans: result.data,
    };
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
