const requireAuth = (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .send({
        error: {
          type: 'UnAuthorization',
          message: 'Token is not provide or invalid',
        },
      })
  }
  next()
}

export const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'god') {
    return res
      .status(403)
      .send({
        error: {
          type: 'PermissionDenied',
          message: 'User\'s role not have permission',
        },
      })
  }
  next()
}

export default requireAuth
