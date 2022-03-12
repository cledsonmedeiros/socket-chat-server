import { Router } from "express";
import { socketClient } from "../../config/socket";

const routes = Router();

routes.post("/", (req, res) => {
  socketClient.emit("eventFromController", { event: "from controller" });
  return res.status(200).json({ hello: "world" });
});

const testeRoutes = routes;

export { testeRoutes };
