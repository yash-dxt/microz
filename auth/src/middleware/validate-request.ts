import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { DataValidationError } from "../errors/extensions/validation-error";


export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req); //Error gets assigned error in the form of array from here. 
    if (!errors) {
        throw new DataValidationError(errors);
    }
    //If no error will continue to middleware. 
    next();
}