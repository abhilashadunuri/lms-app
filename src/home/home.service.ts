import { Request, Response } from 'express';

export const homeService = (req: Request, res: Response) => {
    res.json({
        'message': "Welcome to the home page",
    });
    res.status(200);
}