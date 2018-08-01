import jwt from 'jsonwebtoken'

/**
 *
 * @param {object} user
 * @param {string} secret
 */
export const createToken = (user, secret) => {
  const token = jwt.sign(
    { user },
    secret,
    {
      expiresIn: 60, // 30 seconds
    },
  )
  return token
}