import { v1 } from "./v1";

export default async (app) => {
  app.use("/v1", v1);
};
