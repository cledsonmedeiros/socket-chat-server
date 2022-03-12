import { Router } from "express";
import { testeRoutes } from "./teste";

const routes = Router();

routes.use("/teste", testeRoutes);

const v1 = routes;

export { v1 };
