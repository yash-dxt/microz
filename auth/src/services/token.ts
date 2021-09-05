import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';

export class Token {
    static refreshToken() {
        return uuidv4();
    }

    static getJwt(email: string, roles: string[]) {
        let token = jwt.sign({ email, roles }, process.env.TOKEN_KEY!, { expiresIn: 600000 });
        return token;
    }

    static verifyJwt(token: string) {
        return jwt.verify(token, process.env.TOKEN_KEY!);
    }
}