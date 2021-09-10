import express, { Request, Response } from 'express';
import { body, query } from 'express-validator';
import { BadRequestError } from '../errors/extensions/bad-request-error';
import { validateRequest } from '../middleware/validate-request';
import { User } from '../models/User';
import { Password } from '../services/password';
import { Token } from '../services/token';

const router = express.Router();

router.post('/api/user/login',
    [
        body('email').isEmail().withMessage('Email must be valid'),
        body('password').exists().withMessage('Please enter a password'),

    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            throw new BadRequestError('Authentication Failed!');
        }

        const correctPass = await Password.compare(password, existingUser.password);

        if (!correctPass) {
            throw new BadRequestError('Authentication Failed!');
        }
        const jwt = Token.getJwt(email, existingUser.roles);

        const refreshToken = Token.getRefreshToken(existingUser.id, existingUser.password);

        const response = {
            user: existingUser, tokens: { jwt, refreshToken }
        };

        res.status(200).send(response);

    });


export { router as loginUserRouter }