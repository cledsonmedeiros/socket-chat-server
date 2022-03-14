import express from "express";
import http from "http";
import { Server } from "socket.io";
import { allowedOrigins } from "./config/allowedOrigins";
import { cors } from "./middlewares/cors";
import routes from "./routes";

const app = express();

app.use(cors);
app.use(express.json());

const httpServer = http.createServer(app);

console.log(allowedOrigins);

const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  },
});

routes(app);

export { httpServer, io, app };
