import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.scss'],
})
export class ContactForm {
  @Output() formSubmitted = new EventEmitter<void>();

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  submitForm() {
    if (this.form.invalid) {
      return;
    } else {
      this.formSubmitted.emit();
      this.form.reset();
    }
  }
}
