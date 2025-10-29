import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css']
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
