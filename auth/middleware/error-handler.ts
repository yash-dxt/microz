import { NextFunction, Request, Response } from "express";
import { CustomBaseError } from "../errors/custom-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    // Sending consistent error over here which is -> {message: string, field: string[]}[] 
    if (err instanceof CustomBaseError) {
        return res.status(err.statusCode).send(err.getErrorList);
    }
    res.status(400).send([{ message: 'Some unexpected error occurred' }])
}