"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _socketioclient = require('socket.io-client'); var _socketioclient2 = _interopRequireDefault(_socketioclient);

const socketClient = _socketioclient2.default.connect("http://localhost:3000");

exports.socketClient = socketClient;
