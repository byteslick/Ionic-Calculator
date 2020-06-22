import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: [ 'home.page.scss' ],
})
export class HomePage {
    resultString: String = '';
    currentString: String = '';
    currentOperation: String = '';

    constructor() { }

    reset = () => {
        console.log("Performing Reset");
        this.currentString = '';
        this.resultString = '';
    }

    delete = () => {
        console.log("Performing Backspace");
        if (this.currentString.length > 0) {
            this.currentString = this.currentString.substr(0, this.currentString.length - 1);
        } else {
            this.reset();
        }
    }

    perform = (operation) => {
        console.log(`Performing ${ operation }`);
        this.currentOperation = operation;
    }

    numberClicked = (number) => {
        console.log(`Number ${ number } pressed.`);
        this.currentString = this.currentString + number;
    }

    decimalClicked = () => {
        console.log("Decimal Clicked");
        if (this.currentString.indexOf('.') < 0) {
            this.currentString = this.currentString + '.';
        }
    }

}
