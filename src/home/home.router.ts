import { Router } from "express";
import { homeService, licenseService } from "./home.service";

export const homeRouter = Router();

homeRouter.get('', homeService);
homeRouter.get('/license', licenseService);

export default homeRouter;