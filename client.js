// **Setup**:

// 1. Create a new file called `client.js`.
// 2. run `npm install axios`
// 3. Import (require) axios at the top.

// **A**: Make a function that takes NO params and makes and axios request to our server to get all characters and logs them.

// **B**: Make a function that takes 1 parameter (characterId) and makes and axios call to your GET - /characters/:id endpoint. We should log the character with that `id` that is returned from our route.

// Your functions in this section should looks something like this:

// ```js
// const axios = require("axios"); // ONLY ONCE

// async function getCharacters() {
//   const response = await axios.get("http://localhost:4000/characters");
//   console.log(response.data);
// }

// getCharacters();
// ```
const axios = require("axios");

const getAllCharacters = async () => {
  try {
    const api = `http://localhost:3040/characters`;
    const response = await axios.get(api);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

getAllCharacters();

const characterById = async (id) => {
  try {
    const api = `http://localhost:3040/characters/${id}`;
    const characterId = params.id; // ALWAYS A STRING
    console.log("this is my id", id);
    console.log("Trying to get character", characterId);
    const response = await axios.get(api);
    console.log(response.data);
    // const { data } = response;

    // console.log(`this is my [DATA] ${data}`);
    // const evertithing = data[x];

    // // console.log(`this is my everthing ${evertithing}`);
    // console.log(evertithing);
  } catch (error) {
    console.log(error.message);
  }
};

characterById();

// function characterId(id) {
//   console.log("sync version: enter");
//   const res = axios.get(`'http://localhost:3040/characters/${id}'`);
//   console.log(res);
//   console.log("sync version: exit");
// }

// characterId(0);
// characterId(1);
// characterId(2);
