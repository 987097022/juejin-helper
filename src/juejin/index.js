const Api = require('./api.js')

class Juejin extends Api {
  constructor() {
    super()
    this.user = null
    this.http.setCookie(null)
  }

  async login(cookie) {
    this.http.setCookie(cookie)
    this.user = await this.getUser()
  }
}

module.exports = Juejin
