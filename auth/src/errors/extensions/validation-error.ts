import { ValidationError } from "express-validator";
import { CustomBaseError } from "../custom-error";


export class DataValidationError extends CustomBaseError {
    statusCode = 400;
    //the below public errors: ValidationError[] is same as a property of public errors: ValidationError[]
    constructor(public errors: ValidationError[]) {
        super('Validation error');
        Object.setPrototypeOf(this, DataValidationError.prototype);
    }
    getErrorList() {
        return this.errors.map(err => {
            return {
                message: err.msg,
                field: err.param
            }
        })

    }

}