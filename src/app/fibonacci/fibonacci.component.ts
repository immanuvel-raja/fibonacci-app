import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  template: `
    <div>
      <h2>Fibonacci Calculator</h2>
      <label>Enter a number:</label>
      <input type="number" [(ngModel)]="inputNumber"  (input)="calculateFibonacci()" min="0" step="1">
      <p *ngIf="fibonacciValue !== null">Fibonacci value at index {{ inputNumber }} is: {{ fibonacciValue }}</p>
    </div>
  `,
})
export class FibonacciComponent {
  inputNumber: number | null = null;
  fibonacciValue: number | null = null;

  calculateFibonacci() {
    if (this.inputNumber === null) {
      this.fibonacciValue = null;
      return;
    }

    if (this.inputNumber === 0) {
      this.fibonacciValue = 0;
      return;
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= this.inputNumber; i++) {
      const temp = b;
      b = a + b;
      a = temp;
    }

    this.fibonacciValue = b;
  }
}

