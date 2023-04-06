const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { check, validationResult } = require("express-validator");

router.get(
  "/job/:id",
  async (req, res) =>
    await prisma.job
      .findUnique({
        where: {
          id: (req.params.id)*1,
        },
      })
      .then((job) => {
        res.render("view", {
          job,
        });
      })
      .catch((err) => console.log(err))
);

router.get("/add", (req, res) => {
  res.render("add");
});

const errorMessages = {
  notEmpty: "O campo não pode estar em branco.",
  isString: "O campo precisa ser uma string.",
  isCurrency: "O campo precisa ser um número. Ex: 1000",
  isEmail: "O campo precisa ser um email. Ex: exemple@email.com",
};
router.post(
  "/add",
  check("title")
    .notEmpty()
    .withMessage(errorMessages.notEmpty + " - Título")
    .isString()
    .withMessage(errorMessages.isString + " - Título")
    .escape(),
  check("description")
    .notEmpty()
    .withMessage(errorMessages.notEmpty + " - Descrição")
    .isString()
    .withMessage(errorMessages.isString + " - Descrição")
    .escape(),
  check("salary")
    .isCurrency()
    .withMessage(errorMessages.isCurrency + " - Salário")
    .escape(),
  check("company")
    .notEmpty()
    .withMessage(errorMessages.notEmpty + " - Empresa")
    .isString()
    .withMessage(errorMessages.isString + " - Empresa")
    .escape(),
  check("email")
    .notEmpty()
    .withMessage(errorMessages.notEmpty + " - Email")
    .isEmail()
    .withMessage(errorMessages.isEmail + " - Email")
    .normalizeEmail(),
  check("new_job").escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("add", {
        errors: errors.array(),
        form: req.body,
      });
      return;
    }
    const { title, description, salary, company, email, new_job } = req.body; // new_job é enviado como string;
    const new_job_boolean = !!new_job; // pega o new_job e se ele não estiver vazio retorna true;
    const titleVerify = await prisma.job.findMany({
      where: {
        title: {
          contains: title,
          mode: "insensitive",
        },
      },
    });

    if (titleVerify.length > 0) {
      let errors = [{ msg: "Já existe uma vaga cadastrada com este título." }];
      res.render("add", { errors: errors });
    } else {
      await prisma.job
        .create({
          data: {
            title,
            description,
            salary,
            company,
            email,
            new_job: new_job_boolean,
          },
        })
        .then(() => {
          res.redirect("/");
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send("Erro ao criar a nova vaga de emprego");
        });
    }
  }
);

module.exports = router;
