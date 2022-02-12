const express = require("express");
const app = express();

app.get("/makers/:name", (req, res) => {
  const getNameParam = req.params.name;
  const name =
    getNameParam.charAt(0).toLocaleUpperCase() + getNameParam.slice(1);
  res.send(`<h1>Hola ${name}!</h1>`);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
