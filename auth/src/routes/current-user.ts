import express, { Request, Response } from 'express';

const router = express.Router();

router.get('api/user/get', (req: Request, res: Response) => {
    res.send({ user: req.user || null });

});


export { router as currentUserRouter }