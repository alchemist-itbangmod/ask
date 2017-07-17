const mongoose = require('mongoose')

// Import models
const User = require('../models/User.model')

// User module
module.exports = {
  createUser: async (req, res) => {
    let newUser   //  New user to create

    // Create user
    newUser = await User.create({
      displayName: req.body.displayName,
      email: req.body.email,
      password: req.body.password,
      telNo: req.body.telNo,
      avatarUrl: req.body.avatarUrl
    }).then(data => data)
      .catch(err => err)

    // Sending out data
    if (newUser === null) {
      res.json({
        status: false,
        error: 'Unable to create user'
      })
    } else {
      res.json({
        status: true,
        data: newUser
      })
    }
  }
}
