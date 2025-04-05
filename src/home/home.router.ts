import { Router } from "express";
import { homeService } from "./home.service";

export const homeRouter = Router();

homeRouter.get('', homeService);

export default homeRouter;