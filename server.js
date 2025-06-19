require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// Aqui depois você conecta as rotas

app.get('/', (req, res) => {
  res.send('API agendai')
})

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
