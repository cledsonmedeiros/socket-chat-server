"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors2 = require('cors'); var _cors3 = _interopRequireDefault(_cors2);
var _allowedOrigins = require('../config/allowedOrigins');

const corsOptions = {
  origin(origin, callback) {
    // allow requests with no origin
    if (!origin) return callback(null, false);
    if (_allowedOrigins.allowedOrigins.indexOf(origin) === -1) {
      return callback(null, false);
    }
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
};

const cors = _cors3.default.call(void 0, corsOptions);

exports.cors = cors;
