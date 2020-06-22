import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: [ 'home.page.scss' ],
})
export class HomePage {
    currentString: String = "Hello";

    constructor() { }

    reset = () => {
        console.log("Performing Reset");
    }

    delete = () => {
        console.log("Performing Backspace");
    }

    perform = (operation) => {
        console.log(`Performing ${ operation }`);
    }

    numberClicked = (number) => {
        console.log(`Number ${ number } pressed.`);
    }

    decimalClicked = () => {
        console.log("Decimal Clicked");
    }

}
