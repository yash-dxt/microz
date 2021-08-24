import { CustomBaseError } from "../custom-error";

export class NotFoundError extends CustomBaseError {
    statusCode = 404;
    constructor() {
        super('404 Not found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    getErrorList() {
        return [{
            message: '404 Not Found',
        }];
    }
}