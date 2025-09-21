import { CurrencyPipe, CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart-summary',
  imports: [CurrencyPipe, FormsModule, CommonModule],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss',
})
export class CartSummary {
  submitted = false;
  phone = '';
  @Input() total!: number;
  @Output() formSubmitted = new EventEmitter<void>();

  submitForm(form: NgForm) {
    if (form.valid) {
      this.formSubmitted.emit();
      this.submitted = true;
      this.phone = '';
      form.resetForm();
    }
  }
}
