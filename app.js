const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParse = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const port = 8080;

app.listen(port, function () {
  console.log(`O express está rodando na porta ${port}`);
});

// body parser
app.use(bodyParse.urlencoded({ extended: false }));

// handlebars - express
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// static folder
app.use(express.static(path.join(__dirname, "public")));

// Rota padrão
app.get("/", async (req, res) => {
  let search = req.query.jobSearch;
  let jobs;
  if (search) {
    jobs = await prisma.job.findMany({
      where: {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      orderBy: {
        title: "asc",
      },
    });
  } else {
    jobs = await prisma.job.findMany({
      orderBy: {
        title: "asc",
      },
    });
  }
  // jobs para renderizar os trabalhos e search para exibir o que foi pesquisado no h2
  res.render("index", { jobs, search });
});

// Rota Jobs
app.use("/jobs", require("./routes/jobs"));
