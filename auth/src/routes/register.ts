import express, { Request, Response } from 'express';
import { body, query } from 'express-validator';
import { BadRequestError } from '../errors/extensions/bad-request-error';
import { validateRequest } from '../middleware/validate-request';
import { User } from '../models/User';
import { Token } from '../services/token';
import { Password } from '../services/password';

const router = express.Router();

router.post('/api/user/register', [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    query('role').exists().isIn(['owner', 'user']).withMessage('Role was wrong!'),

    //Validation returns with errors in req. 

], validateRequest, async (req: Request, res: Response) => {

    let { email, password } = req.body;
    let { role } = req.query;
    const userString = 'user';
    const ownerString = 'owner';

    const existingUser = await User.findOne({ email });



    let roles: string[] = [];


    if (role == 'owner') {

        if (!existingUser) {

            roles.push(ownerString);

        } else {

            roles = existingUser.roles ? existingUser.roles : [];
            if (roles.includes(ownerString)) {
                throw new BadRequestError('User already exists. Please try logging in.');
            } else {
                roles.push(ownerString);
            }
        }


    } else if (role == 'user') {

        if (!existingUser) {

            roles.push(userString);

        } else {

            roles = existingUser.roles ? existingUser.roles : [];
            if (roles.includes(userString)) {
                throw new BadRequestError('User already exists. Please try logging in.');
            } else {
                roles.push(userString);
            }
        }

    }

    password = await Password.hash(password);

    const refreshToken = Token.refreshToken();
    const jwt = await Token.getJwt(email, roles);


    const user = User.build({
        email, password, roles, refreshToken
    })
    await user.save();

    const response = {
        user, token: jwt
    }


    res.status(201).send(response);


});


export { router as registerUserRouter }