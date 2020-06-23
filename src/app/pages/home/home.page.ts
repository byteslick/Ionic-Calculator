import { Component } from '@angular/core';
import { CalculatorBrainService } from '../../services/calculator-brain.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: [ 'home.page.scss' ],
})
export class HomePage {

    constructor(protected calcBrain: CalculatorBrainService) { }

    reset = () => {
        this.calcBrain.reset();
    }

    delete = () => {
        this.calcBrain.delete();
    }

    perform = (operation) => {
        this.calcBrain.perform(operation);
    }

    numberClicked = (number) => {
        this.calcBrain.numberClicked(number);
    }

    decimalClicked = () => {
        this.calcBrain.decimalClicked();
    }
}
