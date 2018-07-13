const pinModel = require('./model')

module.exports = {
  getPin: (req, res) => {
    res.send(pinModel.getPin)
  },
}