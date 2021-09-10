import { Request, Response, NextFunction } from "express";
import { refreshTokens } from "../helpers/refresh-tokens";
import { Token } from "../services/token";

interface UserPayload {
    id: string,
    email: string,
    roles: string[]
}
interface Tokens {
    jwt: string,
    refreshToken: string
}



declare global {
    namespace Express {
        interface Request {
            user?: UserPayload,
            tokens?: Tokens
        }
    }
}

export const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers?.authorization) {
        return next();
    }
    const jwt = req.headers.authorization;
    const refreshToken = req.headers['refresh-token'] as string;

    try {
        const payload = Token.verifyJwt(jwt) as UserPayload;
        req.user = payload;
    } catch (e) {
        const funcReturn = await refreshTokens(refreshToken)
        req.user = funcReturn.user as UserPayload;
        req.tokens = funcReturn.tokens;

    }
    next();
}


