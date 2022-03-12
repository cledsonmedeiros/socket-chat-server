import io from "socket.io-client";

const socketClient = io.connect("http://localhost:3000");

export { socketClient };
