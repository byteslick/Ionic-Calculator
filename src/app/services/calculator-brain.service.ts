import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculatorBrainService {

    private firstInput: number = null;
    displayString: string = '';
    private currentOperation: string = '';
    private secondInput: boolean = false;

    constructor() { }

    public reset = () => {
        console.log("Performing Reset");
        this.displayString = '';
        this.firstInput = null;
        this.currentOperation = '';
        this.secondInput = false;
    }

    public delete = () => {
        console.log("Performing Backspace");
        if (this.displayString.length > 0) {
            this.displayString = this.displayString.substr(0, this.displayString.length - 1);
            if (parseFloat(this.displayString) == 0) {
                this.reset();
            }
        } else {
            this.reset();
        }
    }

    private percentage = (inValue: string) => {
        const result = parseFloat(inValue) / 100.0;
        return `${ result.toFixed(2) }`;
    }

    private evaluate = () => {
        if (this.firstInput != null && this.currentOperation != null) {
            switch (this.currentOperation) {
                case '÷': {
                    // this.displayString = Math.abs(this.firstInput / parseFloat(this.displayString)).toString();
                }
            }
        } else {
            this.firstInput = parseFloat(this.displayString);
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
            this.secondInput = true;
            this.currentOperation = operation;
        }
    }

    public numberClicked = (number) => {
        console.log(`Number ${ number } pressed.`);
        if (this.secondInput) {
            this.secondInput = false;
            this.displayString = number;
        } else {
            this.displayString = this.displayString + number;
        }
    }

    public decimalClicked = () => {
        console.log("Decimal Clicked");
        if (this.secondInput || this.displayString.length == 0) {
            this.secondInput = false;
            this.displayString = `0.`;
        } else {
            if (this.displayString.indexOf('.') < 0) {
                this.displayString = this.displayString + '.';
            }
        }
    }
}
