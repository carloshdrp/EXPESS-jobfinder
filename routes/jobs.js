const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { check, validationResult } = require("express-validator");

router.get("/add", (req, res) => {
  res.render("add");
});

const errorMessages = {
  notEmpty: "O campo não pode estar em branco.",
  isString: "O campo precisa ser uma string.",
  isCurrency: "O campo precisa ser um valor. Ex: 1000.00",
  isEmail: "O campo precisa ser um email. Ex: exemple@email.com",
};
router.post(
  "/add",
  check("title")
    .notEmpty()
    .withMessage(errorMessages.notEmpty)
    .isString()
    .withMessage(errorMessages.isString)
    .escape(),
  check("description")
    .notEmpty()
    .withMessage(errorMessages.notEmpty)
    .isString()
    .withMessage(errorMessages.isString)
    .escape(),
  check("salary").isCurrency().withMessage(errorMessages.isCurrency).escape(),
  check("company")
    .notEmpty()
    .withMessage(errorMessages.notEmpty)
    .isString()
    .withMessage(errorMessages.isString)
    .escape(),
  check("email")
    .notEmpty()
    .withMessage(errorMessages.notEmpty)
    .isEmail()
    .withMessage(errorMessages.isEmail)
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
);

module.exports = router;
