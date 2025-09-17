import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-contacts',
  imports: [ContactForm],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {
  success: boolean = false
  
  onFormSubmitted() {
    this.success = true
    
    setTimeout(() => this.success = false, 2500)
  }
}
