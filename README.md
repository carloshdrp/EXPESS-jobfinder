# JobFinder - Plataforma de Divulgação de Vagas

---

Um sistema de divulgação de vagas de emprego construído com Express.js, Handlebars e PostgreSQL.

## 🚀 Funcionalidades

- Cadastro de vagas com informações detalhadas
- Listagem de vagas com destaque para novas oportunidades
- Sistema de busca por palavras-chave
- Visualização detalhada de cada vaga

## 🛠️ Tecnologias Utilizadas

- **Express.js** - Framework web
- **Handlebars** - Template engine
- **Prisma ORM** - ORM para PostgreSQL
- **TailwindCSS** - Framework CSS
- **PostgreSQL** - Banco de dados
- **Express Validator** - Validação de formulários

## 📋 Pré-requisitos

- Node.js (v14+)
- PostgreSQL
- NPM ou Yarn

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/carloshdrp/EXPESS-jobfinder.git
```

2. Instale as dependências:

```bash
npm i
```

3. Configure as variáveis de ambiente:

```bash
# Crie um arquivo .env com:
DATABASE_URL="postgresql://user:password@localhost:5432/jobfinder"
```

4. Execute as migrações do banco de dados:

```bash
npx prisma migrate dev
```

5. Inicie o servidor:

```bash
npm run dev
```

## 🔨 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento

## 📦 Estrutura do Projeto

```
jobfinder/
├── public/           # Arquivos estáticos
│   ├── css/         # Estilos
│   ├── js/          # JavaScript
│   └── resources/   # Recursos (imagens, etc)
├── views/           # Templates Handlebars
├── routes/          # Rotas da aplicação
├── prisma/          # Configurações do Prisma
└── app.js           # Entrada da aplicação
```

## ⚙️ Configuração

O projeto utiliza as seguintes configurações principais:

- **Banco de dados**: PostgreSQL através do Prisma ORM
- **Template Engine**: Handlebars para renderização de views
- **Estilização**: TailwindCSS
- **Validação**: Express Validator para inputs de formulários

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido como projeto de estudo e aprendizagem 🚀
