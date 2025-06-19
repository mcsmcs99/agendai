FROM node:18-alpine

WORKDIR /app

# Define o ambiente para garantir que devDependencies sejam instaladas
ENV NODE_ENV=development

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências (inclusive nodemon)
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

EXPOSE 3051

# Usa npx para garantir que funcione mesmo se nodemon estiver nas devDependencies
CMD ["npm", "run", "dev"]