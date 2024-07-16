const getData = async () => {
  try {
    const response = await fetch('https://snk-player-api.vercel.app/');

    const result = await response.json();

    const data = {
      characters: result.data.characters,
      titans: result.data.titans,
    };

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getApi = async () => {
  try {
    const data = await getData();

    const { characters, titans } = data;
  } catch (error) {
    console.log(error);
  }
};

getApi();
