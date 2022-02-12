const express = require("express");
const app = express();

app.get("/makers/:name", (req, res) => {
  const getNameParam = req.params.name;
  const response =
    getNameParam.charAt(0).toLocaleUpperCase() + getNameParam.slice(1);
  res.send(`<h1>Hola ${response}!</h1>`);
});

app.listen("3000", () => console.log("app run in port 3000"));
