import express, { Request, Response } from 'express';
import { authentication } from '../middleware/auth-middleware';
import { getCurrentUser } from '../middleware/current-user';
import { validateRequest } from '../middleware/validate-request';

const router = express.Router();

router.get('api/user/get', getCurrentUser, authentication, (req: Request, res: Response) => {
    res.send({ user: req.user || null });

});


export { router as currentUserRouter }