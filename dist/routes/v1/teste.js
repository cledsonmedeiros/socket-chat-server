"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _socket = require('../../config/socket');

const routes = _express.Router.call(void 0, );

routes.post("/", (req, res) => {
  _socket.socketClient.emit("eventFromController", { event: "from controller" });
  return res.status(200).json({ hello: "world" });
});

const testeRoutes = routes;

exports.testeRoutes = testeRoutes;
