import { Router } from "express";

import { funcionariosRoutes } from "./avatar";

const router = Router();

router.use("/avatar", funcionariosRoutes);

export { router };
