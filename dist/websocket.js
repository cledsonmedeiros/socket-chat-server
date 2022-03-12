"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dayjs = require('dayjs'); var _dayjs2 = _interopRequireDefault(_dayjs);
var _http = require('./http');

let users = [];
let messages = [];

_http.io.on("connection", (socket) => {
  console.log(`socket connected: ${socket.id}`);

  socket.on("joinRoom", (payload) => {
    const user = {
      usuario: payload.usuario,
      sala: payload.sala,
      socket_id: socket.id,
    };

    socket.join(user.sala);

    users.push(user);

    const mensagensDaSala = messages.filter((m) => m.sala === user.sala);

    _http.io.to(user.sala).emit("chatLog", {
      usuario: user.usuario,
      mensagem: `${user.usuario} entrou`,
    });

    _http.io.to(user.socket_id).emit("roomMessages", mensagensDaSala);
  });

  socket.on("novaMensagem", (payload) => {
    payload.dataEpoch = _dayjs2.default.call(void 0, ).valueOf();
    messages.push(payload);
    _http.io.to(payload.sala).emit("novaMensagem", payload);
  });

  socket.on("disconnect", () => {
    console.log(`socket disrsconnected: ${socket.id}`);

    const user = users.find((u) => u.socket_id === socket.id);

    users = users.filter((u) => u.socket_id !== socket.id);

    _http.io.to(user.sala).emit("chatLog", {
      usuario: user.usuario,
      mensagem: `${user.usuario} saiu`,
    });
  });

  socket.on("eventFromController", (payload) => {
    console.log(payload);
  });
});
