const getData = () => {
  fetch('https://snk-player-api.vercel.app/')
    .then((response) => response.json())

    .then((result) => {
      const data = {
        apiTitan: result.data.titans,
        apiCharacter: result.data.characters,
      };

      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
