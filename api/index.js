import express from 'express'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  req.session.token = req.body.val
  console.log(req.body.val)
  return res.json(req.session.token)
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.token

})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}
