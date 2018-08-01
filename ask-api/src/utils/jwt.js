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
      expiresIn: 15 * 60, // 15 minutes
    },
  )
  return token
}