const express = require("express");
const app = express();
const bodyParse = require("body-parser");

const port = 8080;

app.listen(port, function () {
  console.log(`O express está rodando na porta ${port}`);
});

app.use(bodyParse.urlencoded({ extended: false }));

// Rota padrão
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rota Jobs
app.use('/jobs', require('./routes/jobs'));