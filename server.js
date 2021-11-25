// 1. Initialize an NPM project.
// 2. run `npm install express`
// 3. Create a new file called `server.js`
// 4. Require express, declare a value for PORT and start your server using app.listen.
// 5. Require (import) your characters file.

// **A**: Create a GET - /characters route that return the whole list of characters.

// **B**: Create a GET - /characters/:id route that returns the character with matching id

// Remember to test these routes from your browser!
const express = require("express");

const characters = require("./characters (4).json");

const app = express();
const port = 3040;

app.get("/characters", (request, response) => {
  console.log("i had a request!", request);
  console.log(request.method);
  response.send(characters);
});

// need to work
// app.get("/characters/:id ", (request, response) => {
//   //   response.send(characters);
//   //   response.send(characters.id);
//   console.log("i had a params!", params);
//   response.send(request.params);
//   const params = req.params;
//   console.log("the params", params);
// });

app.get("/characters/:id", (request, response) => {
  // We get the "dynamic" part of the endpoint as a PARAMETER
  // We can get this from the request with the same name as we defined it
  const characterId = request.params.id; // ALWAYS A STRING

  console.log("Trying to get character", characterId);

  // Some logic to find the patient we are looking for by id
  const oneCharacter = characters.find((p) => p.id === parseInt(characterId));

  // Send him back to the client
  response.send(oneCharacter);
});

// app.get("/characters/:id", (request, response) => {
//   console.log("I got a request");
//   const id = request.params.id;
//   console.log("this is my id", id);
//   //   response.send(characters[id - 1]);
//   response.send(characters.id);
// });

app.listen(port, () => {
  console.log(`We are listening in this port ${port}`);
});
