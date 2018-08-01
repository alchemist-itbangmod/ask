import jwt from 'jsonwebtoken'
import { createToken } from 'api/utils/jwt'
import tokenModel from 'api/modules/token/model'

const addUser = async (req, res, next) => {
  const token = req.headers['authorization']
  if (token && token.match(/^Bearer (.+)$/)) {
    const auth = token.match(/^Bearer (.+)$/)[1]
    try {
      const { user } = jwt.verify(auth, process.env.SECRET)
      const isRevoke = await tokenModel.findRevokeToken(auth)
      if (!isRevoke) {
        req.user = user
        const newToken = createToken(user, process.env.SECRET)
        res.setHeader('x-token', newToken)
      }
    } catch (err) {
      /** ignore error */
      console.log(err)
    }
  }
  next()
}

export default addUser
