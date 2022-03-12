"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _v1 = require('./v1');

exports. default = async (app) => {
  app.use("/v1", _v1.v1);
};
