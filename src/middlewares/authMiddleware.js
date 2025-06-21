const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey'

module.exports = function(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ message: 'No token provided' })

  const parts = authHeader.split(' ')
  if (parts.length !== 2) return res.status(401).json({ message: 'Token error' })

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) return res.status(401).json({ message: 'Token malformatted' })

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token invalid' })

    req.userId = decoded.id
    req.userEmail = decoded.email
    req.isAdmin = decoded.is_admin
    next()
  })
}
