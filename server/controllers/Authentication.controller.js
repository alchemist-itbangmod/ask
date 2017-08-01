const Passport = require('../services/passport')
// IMPORT MODELS

// Question model
module.exports = {
  signup: async (req, res) => {
    if (req.user) {
      res.send(new Error(`You're already Login.`))
      return
    }
    const args = {
      email: req.body.email,
      password: req.body.password,
      roles: ['Normal']
    }

    let data = await Passport.signup(args, req)
    if (data instanceof Error) {
      console.log(data.message)
      res.json({
        code: data.code,
        message: data.message
      })
      return
    }
    res.json(data)
  },
  login: async (req, res) => {
    if (req.user) {
      let err = new Error(`You're already Login.`)
      console.log('Hi')
      res.send(err.message)
      return
    }

    const { email, password } = req.body
    const args = { email, password, req }
    let user = await Passport.login(args)
    res.json({
      user
    })
  },
  logout: (req, res) => {
    req.session.destroy()
    res.json({
      token: `${req.token} was deleted!`
    })
  },
  currentUser: async (req, res) => {
    if (req.headers.token === null) {
      res.send(null)
    }

    const User = await Passport.getCurrentUser(req)
    if (User instanceof Error) {
      console.log(User.message)
      res.json({
        code: User.code,
        message: User.message
      })
      return
    }
    res.json(User)
  }
}
