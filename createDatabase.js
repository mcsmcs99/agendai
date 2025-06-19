require('dotenv').config()
const { Client } = require('pg')

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env

async function createDatabase() {
  const client = new Client({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: 'postgres' // se conecta no banco padrão
  })

  try {
    await client.connect()
    const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${DB_NAME}'`)
    
    if (res.rowCount === 0) {
      await client.query(`CREATE DATABASE "${DB_NAME}"`)
      console.log(`✅ Banco "${DB_NAME}" criado com sucesso.`)
    } else {
      console.log(`ℹ️ Banco "${DB_NAME}" já existe. Nenhuma ação foi tomada.`)
    }

    await client.end()
  } catch (err) {
    console.error('❌ Erro ao criar banco:', err)
    process.exit(1)
  }
}

createDatabase()
