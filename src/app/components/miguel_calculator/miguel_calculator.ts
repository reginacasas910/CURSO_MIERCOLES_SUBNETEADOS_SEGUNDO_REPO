import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './miguel_calculator.html',
  styleUrls: ['./miguel_calculator.scss']
})
export class CalculatorComponent {
  display: string = '';

  append(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch {
      this.display = 'Error';
    }
  }
}
