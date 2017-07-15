const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const User = require('../models/Users')

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.model.findOne({ email }, (err, user) => {
      if (err) return done(err)
      if (!user) {
        return done(null, false, 'Invalid credentials.')
      }

      bcrypt.compare(password, user.password, (err, correct) => {
        if (err) throw err
        if (correct) {
          return done(null, user)
        } else {
          return done(null, false, 'Invalid credentials.')
        }
      })
    })
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

module.exports = {
  login: ({ email, password, req }) => {
    return new Promise((resolve, reject) => {
      passport.authenticate('local', (err, user) => {
        if (err) {
          reject(err.message)
        }
        if (!user) {
          reject(new Error('Invalid credentials.'))
        }
        req.login(user, () => resolve(user))
      })({ body: { email, password } })
    })
  },
  signup: (args, req) => {
    const oldPass = args.password

    const signup = new Promise(async (resolve, reject) => {
      try {
        let user = await User.create(args)
        resolve(user)
      } catch (err) {
        reject(err.message)
      }
    })

    return signup.then(user => {
      return new Promise((resolve, reject) => {
        passport.authenticate('local', (err, user) => {
          if (err) {
            reject(err.message)
          }
          if (!user) {
            reject(new Error('Invalid credentials.'))
          }
          req.login(user, () => resolve(user))
        })({ body: { email: args.email, password: oldPass } })
      })
    })
  }
}
