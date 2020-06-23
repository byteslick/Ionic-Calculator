import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculatorBrainService {

    private resultString: string = '';
    currentString: string = '';
    private currentOperation: string = '';

    constructor() { }

    public reset = () => {
        console.log("Performing Reset");
        this.currentString = '';
        this.resultString = '';
        this.currentOperation = '';
    }

    public delete = () => {
        console.log("Performing Backspace");
        if (this.currentString.length > 0) {
            this.currentString = this.currentString.substr(0, this.currentString.length - 1);
        } else {
            this.reset();
        }
    }

    public percentage = (inValue: string) => {
        const result = parseFloat(inValue) / 100.0;
        return `${ result.toFixed(2) }`;
    }

    public perform = (operation) => {
        console.log(`Performing ${ operation }`);
        if (operation == '%') {
            this.currentString = this.percentage(this.currentString);
        } else {
            this.currentOperation = operation;
        }
    }

    public numberClicked = (number) => {
        console.log(`Number ${ number } pressed.`);
        this.currentString = this.currentString + number;
    }

    public decimalClicked = () => {
        console.log("Decimal Clicked");
        if (this.currentString.indexOf('.') < 0) {
            this.currentString = this.currentString + '.';
        }
    }
}
