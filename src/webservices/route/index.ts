
import { Router } from "express";
import chatperrouter from "./ContactoRoutes";

const routes = Router();

routes.use(chatperrouter);

export default routes;