const urlPrefix = require('../config/server').urlPrefix
const currentPath = `${urlPrefix}/start`
const nextPath = `${urlPrefix}/applicant-business`

module.exports = {
  method: 'GET',
  path: currentPath,
  handler: (request, h) => {
    return h.view('home', { button: { nextLink: nextPath, text: 'Start now' } })
  }
}
