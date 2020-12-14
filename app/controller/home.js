'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = this.config.keys
    this.logger.debug("这是controller里边的debug")
    this.service.home.index()
  }
}

module.exports = HomeController;
