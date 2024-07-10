const getTitansApi = async (titans) => {
  try {
    const url = await fetch(titans);
    const result = await url.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const getCharactersApi = async (characters) => {
  try {
    const url = await fetch(characters);
    const result = await url.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const getDataApi = async () => {
  try {
    const url = await fetch('https://snk-player-api.vercel.app/');
    const result = await url.json();

    const data = {
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
