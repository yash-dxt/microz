import { Request, Response, NextFunction } from "express";
import { Token } from "../services/token";

interface UserPayload {
    id: string,
    email: string,
    roles: string[]
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload
        }
    }
}

export const getCurrentUser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers?.authorization) {
        return next();
    }
    try {
        const payload = Token.verifyJwt(req.headers.authorization) as UserPayload;
        req.user = payload;
    } catch (e) {

    }
}


