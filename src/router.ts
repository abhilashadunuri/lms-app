import { Router } from "express";
import homeRouter from "./home/home.router";

const router = Router();

router.use('/home', homeRouter);

export default router;