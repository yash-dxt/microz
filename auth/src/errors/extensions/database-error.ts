import { CustomBaseError } from "../custom-error";

export class DatabaseError extends CustomBaseError {
    statusCode = 500;
    constructor() {
        super('Database Error');
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
    getErrorList() {
        return [{
            message: 'Database error'
        }]
    }

}