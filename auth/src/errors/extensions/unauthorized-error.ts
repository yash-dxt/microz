import { CustomBaseError } from "../custom-error";

export class UnauthorizedError extends CustomBaseError {
    statusCode = 400;

    constructor() {
        super('Unauthorized');
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }

    getErrorList() {
        return [{
            message: 'Unauthorized.'
        }]
    }
}