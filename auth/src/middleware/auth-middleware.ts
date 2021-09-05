import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../errors/extensions/unauthorized-error";

//Always goes after currentUser middleware. 

export const authentication = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        throw new UnauthorizedError();
    }
    next();
};