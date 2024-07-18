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

    async function getCharact() {
      const resCharact = await fetch(characters);
      const dataCharact = await resCharact.json();

      const { data } = dataCharact;
      console.log(data);
      return data;
    }

    await getCharact();

    async function getTitan() {
      const resTitan = await fetch(titans);
      const dataTitan = await resTitan.json();

      const { data } = dataTitan;
      console.log(data);
      return data;
    }

    await getTitan();
  } catch (error) {
    console.log(error);
  }
};

getApis();
