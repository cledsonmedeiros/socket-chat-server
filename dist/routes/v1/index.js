"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _teste = require('./teste');

const routes = _express.Router.call(void 0, );

routes.use("/teste", _teste.testeRoutes);

const v1 = routes;

exports.v1 = v1;
