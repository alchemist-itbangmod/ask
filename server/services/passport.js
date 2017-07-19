const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User.model')

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await User.getOne({ email: email }).then(data => data)

      if (!user) {
        return done(null, false, 'Invalid credentials.')
      }

      const correct = await bcrypt.compare(password, user.password)
      
      if (correct) {
        return done(null, user)
      }
      return done(null, false, 'Invalid credentials.')
    } catch (err) {
      return new Error(err.message)
    }
  })
)

passport.serializeUser((user, done) => {
  done(null, user.email)
})

passport.deserializeUser((email, done) => {
  User.model.findOne({ email }, (err, user) => {
    if (err) throw err
    const returnedUser = {
      _id: user._id,
      email: user.email,
      roles: user.roles
    }
    done(err, returnedUser)
  })
})

async function signup(args, req) {
  const oldPass = args.password
  const signingUp = new Promise(async (resolve, reject) => {
    try {
      const user = await User.create(args)
      resolve(user)
    } catch (err) {
      reject(new Error(err.message))
    }
  })
  try {
    const user = await signingUp.then(() => new Promise((resolve, reject) => {
      passport.authenticate('local', (err, user) => {
        if (err) {
          reject(new Error(err.message))
        }
        req.login(user, () => resolve(user))
      })({ body: { email: args.email, password: oldPass } })
    }))

    const token = await jwt.sign({
      user: {
        _id: user._id,
        email: user.email,
        roles: user.roles
      }
    }, process.env.TOKEN_SECRET, { expiresIn: '24h' })
    return { token }
  } catch (err) {
    return new Error(err)
  }
}

async function login({ email, password, req }) {
  try {
    const user = await new Promise((resolve, reject) => {
      passport.authenticate('local', (err, user) => {
        if (err) {
          reject(new Error(err.message))
        }

        if (!user) {
          reject(new Error('Invalid credentials.'))
        }
        req.login(user, () => resolve(user))
      })({ body: { email, password } })
    })

    const token = await jwt.sign({
      user: {
        _id: user._id,
        email: user.email,
        roles: user.roles
      }
    }, process.env.TOKEN_SECRET, { expiresIn: '24h' })

    return { token }
  } catch (err) {
    return new Error(err)
  }
}

async function getCurrentUser(req) {
  try {
    const data = await jwt.verify(req.headers.token, process.env.TOKEN_SECRET)
    const CurrentUser = await User.getOne({ email: data.user.email }).then(data => data)
    return CurrentUser
  } catch (err) {
    return err
  }
  
}

module.exports = { signup, login, getCurrentUser }
