require('dotenv').config()

const express = require('express')
const cors = require('cors')

const authRoutes = require('./src/routes/authRoutes')

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Rotas
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('API agendai')
})

const PORT = process.env.PORT || 3051
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
