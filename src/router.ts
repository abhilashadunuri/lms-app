import { Router } from "express";
import { homeService } from "./home/home.service";

const router = Router();

router.use('/home', homeService);

export default router;