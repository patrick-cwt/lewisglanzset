export class ErrorMessage {
    constructor(public errorMessageFor: any, public errorMessage: string) {}
}

export class InputValidationMapping {
    constructor(public input: HTMLInputElement, public validationMsg: string) {}
}