import { Request, Response } from 'express';
import LicenseModel from '../models/license.model';

export const homeService = (req: Request, res: Response) => {
    res.json({
        'message': "Welcome to the home page",
    });
    res.status(200);
}

export const licenseService = async (req: Request, res: Response) => {
    try {
        const data = await LicenseModel.find({});
        res.json(data);
    }
    catch (error) {
        console.error('Error fetching licenses:', error);
        res.status(500).json({
            'message': 'Internal server error',
        });
        return;
    }
    res.status(200);
}