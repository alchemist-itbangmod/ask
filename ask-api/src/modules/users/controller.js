/* eslint-disable camelcase */
import axios from 'axios'
import { to } from 'api/utils/await'
import userModel from 'api/modules/users/model'
import { createToken } from 'api/utils/jwt'

export default {
  facebookLogin: async (req, res) => {
    const acto = req.body.accessToken
    if (!acto) {
      return res.status(400).send({
        message: 'fail',
      })
    }
    const [err, data] = await to(axios.get('https://graph.facebook.com/v3.1/me', {
      params: {
        access_token: acto,
        fields: 'name,first_name,last_name,gender,email',
      },
    }))
    if (err) {
      return res.status(400).send(err)
    }
    const user = await userModel.findOrCreate({
      fb_id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      access_token: acto,
    })
    const token = createToken(user, process.env.SECRET)
    res.setHeader('x-token', token)
    res.send(user)
  },
  logout: async (req, res) => {
    const token = req.headers['authorization']
    if (token && token.match(/^Bearer (.+)$/)) {
      res.setHeader('x-token', null)
    }
    res.status(200).send({
      message: 'Logout success !',
    })
  },
}