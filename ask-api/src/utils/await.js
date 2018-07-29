/**
 *
 * @param {Promise} promise
 * @param {object=} errorExt
 * @return {Promise}
 */
export const to = (promise, errorExt) => {
  return promise
    .then(resp => [null, resp.data])
    .catch(err => {
      const errData = err.response.data
      if (errorExt) {
        Object.assign(errData, errorExt)
      }
      return [errData, undefined]
    })
}