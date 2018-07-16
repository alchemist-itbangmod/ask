const pinModel = require('./model')

module.exports = {
  getRoomByPin: (req, res) => {
    const id = parseInt(req.params.id)
    res.send(pinModel.getRoomByPin(id))
  },
}