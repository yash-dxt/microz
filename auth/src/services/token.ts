import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';

export class Token {
    static refreshToken() {
        return uuidv4();
    }

    static async getJwt(email: string, roles: string[]) {
        let token = await jwt.sign({ email, roles }, 'temp', { expiresIn: 600000 });
        return token;
    }

    static async verifyJwt(token: string) {
        return await jwt.verify(token, 'temp');
    }
}