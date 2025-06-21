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

# Instalar dependencias
npm install

# Gerar JWT para para colar no .env
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Subir ambiente de desenvolvimento
docker-compose up -d

# Acessar container da aplicação
sudo docker exec -it agendai sh

# Criar banco de dados
npm run create-db

# Rodar migrações
npx knex migrate:latest

```