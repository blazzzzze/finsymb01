export class ValidateException extends Error {
    constructor(public Member: string, Message: string = "Model validation error"){
        super(Message);
    }
}