import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculatorBrainService {

    private firstInput: number = null;
    displayString: string = '';
    private currentOperation: string = '';

    constructor() { }

    public reset = () => {
        console.log("Performing Reset");
        this.displayString = '';
        this.firstInput = null;
        this.currentOperation = '';
    }

    public delete = () => {
        console.log("Performing Backspace");
        if (this.displayString.length > 0) {
            this.displayString = this.displayString.substr(0, this.displayString.length - 1);
        } else {
            this.reset();
        }
    }

    private percentage = (inValue: string) => {
        const result = parseFloat(inValue) / 100.0;
        return `${ result.toFixed(2) }`;
    }

    private evaluate = () => {
        if (this.firstInput != null) {

        }
    }

    public perform = (operation) => {
        console.log(`Performing ${ operation }`);
        if (operation == '%') {
            this.displayString = this.percentage(this.displayString);
        } else {
            if (this.currentOperation != null) {
                this.evaluate();
            }
            this.currentOperation = operation;
        }
    }

    public numberClicked = (number) => {
        console.log(`Number ${ number } pressed.`);
        this.displayString = this.displayString + number;
    }

    public decimalClicked = () => {
        console.log("Decimal Clicked");
        if (this.displayString.indexOf('.') < 0) {
            this.displayString = this.displayString + '.';
        }
    }
}
