import jwt from 'jsonwebtoken'

export class Token {

    static getJwt(email: string, roles: string[]) {
        let token = jwt.sign({ email, roles }, process.env.TOKEN_KEY!, { expiresIn: 600000 });
        return token;
    }

    static getRefreshToken(userId: string, password: string) {
        let salt = password + process.env.REFRESH_TOKEN_KEY!;
        let rt = jwt.sign(userId, salt, { expiresIn: '7d' });
        return rt;
    }

    static verifyJwt(token: string) {
        return jwt.verify(token, process.env.TOKEN_KEY!);
    }

    static verifyRefreshToken(token: string, password: string) {
        let salt = password + process.env.REFRESH_TOKEN_KEY!;
        return jwt.verify(token, salt);
    }

    static decodeRefreshToken(token: string) {
        return jwt.decode(token);
    }
}