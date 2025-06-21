const db = require('../db/knex')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'secretkey'

// Registro de usuário
exports.register = async (req, res) => {
  const { name, email, password, whatsapp, date_of_birth, document } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password required' })
  }

  try {
    const userExists = await db('users').where({ email }).first()
    if (userExists) return res.status(409).json({ message: 'Email already registered' })

    const hashed = await bcrypt.hash(password, 10)

    const [id] = await db('users').insert({
      name,
      email,
      password: hashed,
      whatsapp: whatsapp || null,
      date_of_birth: date_of_birth || null,
      document: document || null,
      is_admin: 0
    }).returning('id')

    res.status(201).json({ id, message: 'User registered' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }

  try {
    const user = await db('users').where({ email }).first()
    if (!user) return res.status(401).json({ message: 'Invalid credentials' })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(401).json({ message: 'Invalid credentials' })

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        is_admin: user.is_admin
      },
      JWT_SECRET,
      { expiresIn: '8h' }
    )

    // Remove a senha antes de enviar a resposta
    const { password: _, ...userData } = user

    res.json({
      token,
      user: userData
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// Atualizar usuário
exports.updateUser = async (req, res) => {
  const userId = req.userId
  const { name, whatsapp, date_of_birth, document, status } = req.body

  try {
    await db('users').where({ id: userId }).update({
      name,
      whatsapp,
      date_of_birth,
      document,
      status,
      updated_at: new Date()
    })

    res.json({ message: 'User updated' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}
