import { CustomBaseError } from "../custom-error";

export class BadRequestError extends CustomBaseError {
    statusCode = 400;
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    getErrorList() {
        console.log("this is called");
        return [{
            message: this.message
        }];
    }
}