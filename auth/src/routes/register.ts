import express, { Request, Response } from 'express';
import { body, param, query } from 'express-validator';
import { BadRequestError } from '../errors/extensions/bad-request-error';
import { validateRequest } from '../middleware/validate-request';
import { User } from '../models/User';

const router = express.Router();

router.post('/api/user/register', [
    param('role').exists().isIn(['owner', 'user']).withMessage('Role was wrong!'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
    //Validation returns with errors in req. 

], validateRequest, async (req: Request, res: Response) => {





});


export { router as registerUserRouter }