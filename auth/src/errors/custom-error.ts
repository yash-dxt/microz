export abstract class CustomBaseError extends Error {
    abstract statusCode: number;
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomBaseError.prototype);
    }

    abstract getErrorList(): { message: string; field?: string }[];
}