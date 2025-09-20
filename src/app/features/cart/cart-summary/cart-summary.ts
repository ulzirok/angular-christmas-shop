import { CurrencyPipe, CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart-summary',
  imports: [CurrencyPipe, FormsModule, CommonModule],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss'
})
export class CartSummary {
  submitted: boolean = false
  
  @Input() total!: number
  phone: string = ''
  
  @Output() submittedSuccess = new EventEmitter<void>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submittedSuccess.emit();
      
      this.submitted = true
      this.phone = '';
      form.resetForm()
    }
  }
 }
