import dayjs from "dayjs";
import { io } from "./http";

let users = [];
let messages = [];

io.on("connection", (socket) => {
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

    io.to(user.sala).emit("chatLog", {
      usuario: user.usuario,
      mensagem: `${user.usuario} entrou`,
    });

    io.to(user.socket_id).emit("roomMessages", mensagensDaSala);
  });

  socket.on("novaMensagem", (payload) => {
    payload.dataEpoch = dayjs().valueOf();
    messages.push(payload);
    io.to(payload.sala).emit("novaMensagem", payload);
  });

  socket.on("disconnect", () => {
    console.log(`socket disconnected: ${socket.id}`);

    const user = users.find((u) => u.socket_id === socket.id);

    users = users.filter((u) => u.socket_id !== socket.id);

    io.to(user.sala).emit("chatLog", {
      usuario: user.usuario,
      mensagem: `${user.usuario} saiu`,
    });
  });

  socket.on("eventFromController", (payload) => {
    console.log(payload);
  });
});
