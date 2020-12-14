'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index() {
    this.ctx.logger.debug("这是service中的debug")
  }
}

module.exports = HomeService;
