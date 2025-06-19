# Agendai Backend

Este é o backend do projeto **Agendai**, construído com **Node.js**, **Express**, **PostgreSQL**, e containerizado com **Docker**.

---

## ✅ Requisitos

- [Node.js 18+](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 📦 Dependências principais

- **express** – Framework web para Node.js.
- **pg** – Cliente PostgreSQL para Node.js.
- **dotenv** – Carrega variáveis de ambiente a partir de um arquivo `.env`.

### 🔧 Dev Dependencies

- **nodemon** – Reinicia automaticamente o servidor ao detectar mudanças nos arquivos durante o desenvolvimento.

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` com o seguinte conteúdo (ajuste os valores conforme necessário):

env
PORT=3051

DB_HOST=postgres
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=agendai

JWT_SECRET=uma_senha_secreta_aqui

---
## Rode os seguintes comandos na sequencia

docker-compose up -d

sudo docker exec -it agendai sh

npm run create-db

npx knex migrate:latest

```