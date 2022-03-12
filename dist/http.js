"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _http = require('http'); var _http2 = _interopRequireDefault(_http);
var _socketio = require('socket.io');
var _allowedOrigins = require('./config/allowedOrigins');
var _cors = require('./middlewares/cors');
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

const app = _express2.default.call(void 0, );

app.use(_cors.cors);
app.use(_express2.default.json());

const httpServer = _http2.default.createServer(app);

const io = new (0, _socketio.Server)(httpServer, {
  cors: {
    origin: _allowedOrigins.allowedOrigins,
    methods: ["GET", "POST"],
  },
});

_routes2.default.call(void 0, app);

exports.httpServer = httpServer; exports.io = io; exports.app = app;
