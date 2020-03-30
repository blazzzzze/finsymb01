export class InvalidParameterException extends Error {
    public paramName : string;

    constructor(paramName: string, message: string = "Invalid parameter"){
        super(message);
        this.paramName = paramName;
    }
}