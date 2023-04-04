const express = require("express");
const router = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


router.get('/add', (req, res) => {
    res.render('add');
});

router.post("/add", async (req, res) => {
        const {title, description, salary, company, email, new_job} = req.body; // new_job é enviado como string;
        const new_job_boolean = !!(new_job); // pega o new_job e se ele não estiver vazio retorna true;
        await prisma.job.create({
            data: {
                title,
                description,
                salary,
                company,
                email,
                new_job: new_job_boolean,
            }
        }).then(() => {
            res.redirect('/');
        }).catch((error) => {
            console.error(error);
            res.status(500).send("Erro ao criar a nova vaga de emprego");
        });
});

module.exports = router;